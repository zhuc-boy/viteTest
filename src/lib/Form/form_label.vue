<template>
    <div v-if="labelname">{{ labelname }}</div>
    <slot></slot>
    <div class="text-red-600 text-xs h-4">
        <transition name="myshowAn">
            <span v-if="childChecked === false">{{ tipword }}</span>
        </transition>
    </div>
</template>
<script>
import {
    Formrules,
    Formrule,
    FormItemCheck,
    Formstatus,
} from "./formdictionary";
import { defineComponent, inject, ref, provide, readonly } from "vue";
export default defineComponent({
    props: {
        labelname: {
            type: String,
            required: false,
        },
        prop: {
            type: String,
            required: false,
        },
    },
    setup(props) {
        const needcheck = inject("needCheck");
        // 表单处理状态
        const dealFc = inject(Formstatus);
        // 判断子组件是否checked;
        const childChecked = ref(true);
        // 传递给子组件的函数
        const childRes = (e) => {
            dealFc({
                prop: props.prop,
                checked: e,
            });
            // dealFc(e)
            childChecked.value = e;
        };
        // 传递给子组件的rule列表
        const rule = inject(Formrules)[props.prop];
        const tipword = rule?.message;
        provide(FormItemCheck, childRes);
        provide(Formrule, rule);
        return {
            tipword,
            childChecked,
        };
    },
});
</script>
