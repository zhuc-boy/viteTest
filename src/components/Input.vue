<script setup>
import { useStore } from 'vuex'
import { ref, computed } from 'vue'
const inputnum = ref(0)
const xnum = computed(() => `输入的值为：${inputnum.value}`)
const store = useStore()
</script>
<template>
    <div>
        <input v-model="inputnum">
    </div>
    <div>
        {{xnum}}
    </div>
</template>