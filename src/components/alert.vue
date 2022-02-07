<script setup>
import { ref, inject } from 'vue'
const modalState = ref(false)
const Rootvalue = inject("rootValue")
const changemodalState = () => {
    modalState.value = !modalState.value
}
const showsuggest = ref(false)
const changesuggest = () => {
    showsuggest.value = !showsuggest.value
}
</script>

<template>
    <button @click="changesuggest">过渡图</button>
    <button @click="changemodalState">弹出对话框</button>
    <transition name="myshowAn">
        <div v-if="showsuggest">
            测试过渡
        </div>
    </transition>
    <teleport to="body">
        <transition name="myshowAn">
            <div v-if="modalState" class="modal">
                <div class="content">
                    这是一段对话！
                    {{Rootvalue}}
                    <button @click="changemodalState">关闭对话框</button>
                </div>
            </div>
        </transition>
    </teleport>
</template>
<style>
.modal {
    position: fixed;
    display: grid;
    place-items: center;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.4);
}
.modal .content {
    background-color: #fff;
    width: 500px;
    height: 600px;
    display: grid;
    place-items: center;
    border-radius: 20px;
}
/* 定义进入过渡生效时的状态 */
/* 定义离开过渡生效时的状态 */

</style>