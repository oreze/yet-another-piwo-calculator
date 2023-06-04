import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import './assets/main.css'
import 'vuetify/styles'

import BeerCalculatorVue from './components/BeerCalculator/BeerCalculator.vue'
import BeerCalculatorResultVue from './components/BeerCalculator/BeerCalculatorResult/BeerCalculatorResult.vue'
import BeerCalculatorItemVue from './components/BeerCalculator/BeerCalculatorItem/BeerCalculatorItem.vue'
import { createI18n } from 'vue-i18n'
import { defaultLocale, messages } from './config/localization'
import {library} from '@fortawesome/fontawesome-svg-core'
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'
import { faSun, faMoon } from '@fortawesome/free-regular-svg-icons'

import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: 'dark'
  }
})

const i18n = createI18n({
  // something vue-i18n options here ...
  locale: defaultLocale,
  fallbackLocale: 'en',
  legacy: false,
  messages
});

library.add(faSun, faMoon)

const app = createApp(App)

app.component('BeerCalculator', BeerCalculatorVue)
  .component('BeerCalculatorResult', BeerCalculatorResultVue)
  .component('BeerCalculatorItem', BeerCalculatorItemVue)
  .component('font-awesome-icon', FontAwesomeIcon)

app.use(i18n)
app.use(vuetify)
app.use(createPinia())
app.use(router)

app.mount('#app')
