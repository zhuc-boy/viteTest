import {
    createRouter,
    createWebHashHistory
}
from 'vue-router'
import Mystore from '../store/index'
const Nav = () => import("../src/components/Nav.vue")
const Input = () => import("../src/components/input.vue")
const Alert = () => import("../src/components/alert.vue")
const Login = () => import("../src/components/login.vue")
const Form = () => import("../src/components/Form.vue")
const Request = () => import("../src/components/request.vue")
const DiyForm = () => import("../src/components/myForm.vue")
const Tddtable = () => import("../src/components/tabel.vue")
const routerLink = [{
        path: "/",
        component: Nav,
        redirect: "/DiyForm",
        children: [{
            path: "/input",
            component: Input,
            meta: {
                isAu: true
            }
        }, {
            path: "/alert",
            component: Alert,
        }, {
            path: "/form",
            component: Form,
            meta: {
                isAu: true
            }
        }, {
            path: "/request",
            component: Request,
            meta: {
                isAu: true
            }
        }, {
            path: "/DiyForm",
            component: DiyForm,
            meta: {
                isAu: true
            }
        }]
    },
    {
        path: "/login",
        component: Login,
    }
]
const route = createRouter({
    history: createWebHashHistory(),
    routes: routerLink
})

route.beforeEach((to, from, next) => {
    if (to.path == "/login") {
        next()
        return
    }
    if (to.meta.isAu === true) {
        next()
    } else {
        if (Mystore.state.loginFlag === true) {
            next()
        } else {
            next("/login")
        }
    }
})
export default route