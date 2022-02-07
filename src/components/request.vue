<template>
    <div v-loadding="myloadding" class="info">
        {{Info}}
    </div>
    <div>
        <button @click="getinfo">获取信息</button>
    </div>
    <div>
        <button @click="add">+++</button>
        <button @click="reduce">---</button>
    </div>
    <div>
        {{counts}}
    </div>
</template>
<script setup>
import { ref, onMounted ,computed} from 'vue'
import { useStore } from 'vuex'
import network from '../../utils/request'
const myloadding = ref(false)
const Info = ref()
const getinfo = () => {
    myloadding.value = true
    let i = setTimeout(async () => {
        Info.value = await network("get", "/testvue", null)
        clearTimeout(i)
        myloadding.value = false
    }, 1000);
}
const store = useStore()
const add = () => {
    store.commit("INCREMENT")
}
const reduce = () => {
    store.commit("REDUCE")
}
const mycolor = ref()
const counts=computed(() => store.state.counts)
onMounted(() => {
    console.log("加载阶段")
    // getinfo()
})
</script>
<style>
.myloading {
    background-color: #000;
    color: red;
}
.info {
    height: 20px;
    width: 100px;
}

/* .diycolor {
    color: v-bind(mycolor);
} */
</style>