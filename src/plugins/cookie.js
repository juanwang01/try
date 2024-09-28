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



