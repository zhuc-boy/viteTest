import {
    createApp,
} from 'vue'
// import ElementPlus from 'element-plus'
// import 'element-plus/dist/index.css'
import "./assets/common.css"
import "./assets/tailwind.css"
import Store from '../store/index'
import App2 from './App2.vue'
import Myroute from '../route'
let Root2 = createApp(App2)
Root2.directive("loadding", {
    created(el) {},
    beforeMount(el, binding) {
        if (binding.value === true) {
            el.classList.add("myloading")
        } else {
            // el.classList.remove("myloading")
        }
    },
    mounted(el) {
        // el.style.color = "red"
    },
    beforeUpdate(el, binding) {
        if (binding.value === true) {
            el.classList.add("myloading")
        } else {
            el.classList.remove("myloading")
        }
    }
})

Root2.use(Myroute).use(Store).mount('#app2')