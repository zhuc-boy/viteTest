<script setup>
import { toRefs, ref, reactive, onMounted } from "vue";
import Zform from "../lib/Form/form.vue";
import Zlabel from "../lib/Form/form_label.vue";
import Zinput from "../lib/Form/form_input.vue";
import Zbutton from "../lib/Form/button.vue";
const { name, age } = toRefs(
    reactive({
        name: "",
        age: "",
    })
);
const Formref = ref();
const sendData = () => {
    Formref.value.validateForm(() => {
        console.log(1111111);
        // console.log('name.value :>> ', name.value);
        // console.log('age.value :>> ', age.value);
        //  *validate successfully,do next
    });
};
const resetData = () => {
    Formref.value.resetForm();
};
const rules = {
    name: { required: true, message: "请输入活动名称", trigger: "blur" },
    age: {
        required: false,
        message: "请选择日期",
        trigger: "change",
    },
};
</script>
<template>
    <!-- <div>
        <span>{{name}}</span>
        <br>
        <span>{{age}}</span>
    </div> -->
    <Zform :ZformRules="rules" ref="Formref">
        <Zlabel labelname="名字" prop="name">
            <Zinput v-model="name"></Zinput>
        </Zlabel>
        <Zlabel labelname="年龄" prop="age">
            <Zinput v-model="age"></Zinput>
        </Zlabel>
        <Zlabel>
            <Zbutton @click="sendData">提交</Zbutton>
            <Zbutton @click="resetData">重置</Zbutton>
        </Zlabel>
    </Zform>
</template>
