import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import './assets/css/main.css'
import './assets/css/material-kit-pro.css'
import './assets/css/nucleo-icons.css'
import './assets/css/nucleo-svg.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
