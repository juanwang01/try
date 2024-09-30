import axios from 'axios';
import {gitToken} from "@/plugins/cookie";
import router from "@/router";
import ElMessage from "element-plus";
import store from '@/store/index'

const instance = axios.create({
    baseURL: 'http://127.0.0.1:8000/api/',
    timeout: 1000,
    headers: {
        'X-Custom-Header': 'foobar',
    }
});

instance.interceptors.request.use(function (config) {
    console.log('进入请求拦截器')
    let token = gitToken()
    if (token) {
        // 表示用户已登录

        if (!config.headers) {
            config.headers = {};
        }
        if (!config.headers.common) {
            config.headers.common = {};
        }

        console.log('携带token请求',token)
        config.headers['Authorization'] = token;
    }
    console.log('检查是否携带：',config)
    return config
})

// 响应拦截器
instance.interceptors.response.use(function (response) {
    console.log('进入响应拦截器')
    // API请求执行成功，响应状态码200，自动执行
    if (response.data.code === "2000") {
        console.log('进入响应拦截器1')
        // store中的logout方法
        store.commit("logout");
        // 重定向登录页面  [Login,]
        // router.push({name:"Login"});
        router.replace({name: "Login"});

        // 页面提示
        ElMessage.error("认证过期，请重新登录...");

        return Promise.reject(); // 下一个相应拦截器的第二个函数
    }
    console.log('进入响应拦截器2')

    return response;

}, function (error) {
    console.log('进入响应拦截器3')
    // API请求执行失败，响应状态码400/500，自动执行
    if (error.response.status === 401) {
        console.log('进入响应拦截器4')
        // store中的logout方法
        store.commit("logout");
        // 重定向登录页面  [Login,]
        // router.push({name:"Login"});
        router.replace({name: "Login"});
        ElMessage.error("认证过期，请重新登录...");
        // return
    }
    console.log('进入响应拦截器5')
    return Promise.reject(error);  // 下一个相应拦截器的第二个函数
});

export default instance;
