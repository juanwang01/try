import {createStore} from 'vuex'
import {gitToken, setCookie, cleatCookie, gitUsername} from '../plugins/cookie'


export default createStore({
    state: {
        // username : gitUsername(),
        username: gitUsername(),
        token: gitToken()
    },
    getters: {},
    mutations: {
        login: function (state, {username, token}) {
            console.log('token是否正确提交：', token)
            state.username = username;
            state.token = token;
            // console.log('打印：', state.token)
            //  设置cookie
            setCookie(username, token)

        },
        logout: function (state) {
            state.username = '';
            state.token = '';
            //    清空cookie
            cleatCookie()
        }

    },
    actions: {},
    modules: {}
})
