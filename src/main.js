import { createApp } from 'vue'
import App from './App.vue'

import './plugins/cookie'
import store from './store'
import axios from "axios";
import VueAxios from "vue-axios";

import router from './router'
import installElementPlus from './plugins/element'

import HighchartsVue from 'highcharts-vue'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'


const app = createApp(App).use(store)
installElementPlus(app)
app.use(router).mount('#app')
app.use(HighchartsVue)
app.use(VueAxios,axios)

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}

// 禁用生产环境的警告和调试信息
if (process.env.NODE_ENV === 'production') {
    console.warn = () => {};
    // console.error = () => {};
    // console.log = () => {};
}