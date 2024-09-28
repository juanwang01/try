import { createApp } from 'vue'
import App from './App.vue'

import './plugins/cookie'

import router from './router'
import installElementPlus from './plugins/element'
import store from './store'
import HighchartsVue from 'highcharts-vue'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'


const app = createApp(App).use(store)
installElementPlus(app)
app.use(router).mount('#app')
app.use(HighchartsVue)

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}