import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import './assets/main.css'
import 'ant-design-vue/dist/antd.css';

import Antd from 'ant-design-vue';
import PiwoCalculatorVue from './components/PiwoCalculator.vue'
import { createI18n } from 'vue-i18n'
import { defaultLocale, messages } from './config/localization'

const i18n = createI18n({
  // something vue-i18n options here ...
  locale: defaultLocale,
  fallbackLocale: 'en',
  legacy: false,
  messages
});

console.log(messages);

console.log(window.navigator.language)
const app = createApp(App)

app.component('PiwoCalculator', PiwoCalculatorVue)

app.use(Antd)

app.use(i18n)
app.use(createPinia())
app.use(router)


app.mount('#app')
