<template>
    <form @submit.prevent>
        <input type="text" v-model="name">
        <input type="text" v-model="age">
        <input type="text" v-model="job">
        <button @click="getValue">获取表单值</button>
    </form>
    <div>
        <button v-if="loginoutflag" @click="Login">退出</button>
        <button v-else @click="Logout">登入</button>
    </div>
</template>
<script setup>
import { useStore } from 'vuex'
import { toRefs, reactive, computed } from 'vue'
const { name, age, job } = toRefs(reactive({
    name: "",
    age: "",
    job: ""
}))
// torefs可以在不丢失响应性的情况下对返回的对象进行解构/展开
const getValue = () => {
    console.log(name.value)
    console.log(age.value);
    console.log(job.value);
}
const store = useStore()
const loginoutflag = computed(() => store.state.loginFlag)
const Login = () => {
    store.commit("LOGOUT")
}
const Logout = () => {
    store.commit("LOGIN")
}
</script>
