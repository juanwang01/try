import { getCurrentInstance } from 'vue';
import VueCookie from 'vue-cookie';

export default {
    setup() {
        const instance = getCurrentInstance();
        instance.appContext.app.use(VueCookie);
    },
    // 其他组件选项
};

//导出函数
export const gitUsername = () =>{
    return VueCookie.get('username')
}

export const gitToken = () =>{
    return VueCookie.get('token')
}

export const setCookie = (username,token) =>{
    //设置有效期
    VueCookie.set('username',username,{expires:'10S'})
    VueCookie.set('token',token,{expires:'10S'})
}

export const cleatCookie = () =>{

    VueCookie.delete('username')
    VueCookie.delete('token')
}


//请求拦截器
