import Vue from 'vue'
import Vuex from 'vuex'
import {SOME_MUTATION} from './mutation-types'

Vue.use(Vuex)

/*容器*/
export const store = new Vuex.Store({
    state: {
        count: 10,
        message: 'hello world',
        todos: [
            {id: 1, text: '吃饭', done: true},
            {id: 2, text: '睡觉', done: true},
            {id: 3, text: '打豆豆', done: false},
            {id: 4, text: '写代码', done: false}
        ]
    },
    getters: {
        remaining: state => {
            return state.todos.filter(item => item.done === false).length
        },
        findTodoById(state) {
            return function (id) {
                return state.todos.find(item => item.id === id)
            }
        }
    },
    mutations: {
        increment(state, num = 1) {
            state.count += num
        },
        [SOME_MUTATION](state, data) {
            console.log(data);
            state.message = '哈哈哈，我是常量mutation'
        }
    },
    actions: {
        increment(context, num) {
            setTimeout(function () {
                context.commit('increment', num)
            }, 1000)
        }
    }
})
