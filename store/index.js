import {
    createStore
} from "vuex";
export default createStore({
    strict: true,
    state() {
        return {
            counts: 0,
            loginFlag: true
        }
    },
    mutations: {
        INCREMENT(state) {
            state.counts++
        },
        REDUCE(state) {
            state.counts--
        },
        LOGIN(state) {
            state.loginFlag = true
        },
        LOGOUT(state) {
            state.loginFlag = false
        }
    },
    actions: {

    }
})