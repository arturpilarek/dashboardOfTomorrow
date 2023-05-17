import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'

import { createPinia } from 'pinia'

import { aliases, mdi } from 'vuetify/iconsets/mdi'

import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'


import '@mdi/font/css/materialdesignicons.css';
import 'vuetify/lib/styles/main.sass'



const vuetify = createVuetify({
    components,
    directives,
  })

const pinia = createPinia()
  

createApp(App).use(pinia).use(vuetify).use(router).mount('#app')
