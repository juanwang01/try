import { createStore } from 'vuex'
import {gitToken} from '../plugins/cookie'


export default createStore({
  state: {
    // username : gitUsername(),
    username : '你好',
    token : gitToken()
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
