import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'


const app = createApp(App)

app.use(router)

app.mount('#app')

app.config.globalProperties.$axios = axios;//전역변수로 설정 컴포넌트에서 this.$axios 호출할 수 있음
app.config.globalProperties.$serverUrl = 'http://127.0.0.1:3000/' //api server
