import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import mitt from 'mitt'
import router from '@/router'
import store from '@/vuex'

export const emitter = mitt()

createApp(App).use(router).use(store).mount('#app')
