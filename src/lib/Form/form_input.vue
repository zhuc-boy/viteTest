<template>
    <div class="Zinput">
        <slot name="pre"></slot>
        <input ref="Myinput" class="appearance-none text-sm w-full box-border px-3 pl-1 rounded border border-solid border-gray-300 h-6 outline-none" @input="wordchange" @blur="inputblur" />
        <slot name="next"></slot>
    </div>
</template>
<script setup>
import { Formrule, FormItemCheck } from "./formdictionary";
import { inject, onMounted, watch, ref } from "vue";
const props = defineProps({
    modelValue: String | Number,
});
const rule = inject(Formrule);
const needcheck = inject("needCheck")
const CheckF = inject(FormItemCheck);
const reset = ref(0);
const Myinput = ref("Myinput");
const emit = defineEmits(["update:modelValue"]);
const wordchange = (e) => {
    emit("update:modelValue", e.target.value);
    if (rule?.required === true && rule?.trigger === "change") {
        if (e.target.value == "") {
            CheckF(false);
        } else {
            CheckF(true);
        }
    }
};
const inputblur = (e) => {
    if (rule?.required === true && rule?.trigger === "blur") {
        if (e.target.value === "") {
            CheckF(false);
        } else {
            CheckF(true);
        }
    }
};
const needReset = inject("needReset");
watch(
    () => needReset.value,
    (newdata) => {
        // console.log(Myinput.value);
        if (newdata == "needreset") {
            Myinput.value.value = "";
            emit("update:modelValue", "");
        }
        if (rule?.required === true) {
            CheckF(true);
        }
    }
);
watch(() => needcheck.value,
    (newdata) => {
        if (newdata == 'needcheck' && rule?.required === true) {
            if (Myinput.value.value === "") CheckF(false);
        }
    })
onMounted(() => {
    if (rule?.required === true) {
        CheckF(true);
    }
});
</script>
