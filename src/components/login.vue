<template>
    <form @submit.prevent>
        <p>
            <input v-model="name" placeholder="账户">
        </p>
        <p>
            <input v-model="password" placeholder="密码">
        </p>
        <p>
            <button @click="goIndex">登录</button>
        </p>
    </form>
</template>
<script setup>
import { useRouter } from "vue-router"
import { ref } from 'vue'
import { useStore } from "vuex"
const route = useRouter()
const store = useStore()
const name = ref("")
const password = ref("")
const goIndex = () => {
    store.commit("LOGIN")
    route.push("/")
}
</script>