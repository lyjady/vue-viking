import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import mitt from 'mitt'

export const emitter = mitt()

createApp(App).mount('#app')
