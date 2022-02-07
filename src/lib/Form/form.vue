<template>
    <form @submit.prevent>
        <slot></slot>
    </form>
</template>
<script>
import { Formrules, Formstatus } from "./formdictionary";
import { provide, defineComponent, ref, nextTick } from "vue";
export default defineComponent({
    props: {
        ZformRules: {
            type: Object,
        },
    },
    setup(props) {
        const ruleCheckArr = ref([]);
        const checkFlag = ref("noallcheck");
        const resetFlag = ref("noreset");
        const ruleArrdeal = (e) => {
            let addflag = ruleCheckArr.value.includes((i) => {
                return i.prop === e.prop;
            });
            if (addflag === false) {
                ruleCheckArr.value.push({
                    prop: e.prop,
                    checked: e.checked,
                });
            } else {
                ruleCheckArr.value.map((i) => {
                    if (i.prop === e.prop) {
                        i.checked = e.checked;
                    }
                });
            }
        };
        // 表单规则校验情况数组
        provide(Formstatus, ruleArrdeal);
        // 自定义规则
        provide(Formrules, props.ZformRules);
        // 验证是否符合规则
        // 向下传递验证需求
        provide("needCheck", checkFlag);
        provide("needReset", resetFlag);
        const validateForm = async (callBack) => {
            checkFlag.value = "needcheck";
            nextTick(() => {
                console.log("ruleCheckArr :>> ", ruleCheckArr.value);
                ruleCheckArr.value.map((i) => {
                    console.log(i.value.checked);
                });
                let failsFlag = ruleCheckArr.value.includes(
                    (i) => i.checked.value === false || i.checked.value === null
                );

                failsFlag === false && callBack();
                let i = setTimeout(() => {
                    checkFlag.value = "noallcheck";
                    clearTimeout(i);
                }, 100);
            });
        };
        // 重置表单
        const resetForm = () => {
            resetFlag.value = "needreset";
            let i = setTimeout(() => {
                resetFlag.value = "noreset";
                clearTimeout(i);
            }, 100);
        };
        return {
            validateForm,
            resetForm,
        };
    },
});
</script>
