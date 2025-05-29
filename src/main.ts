import 'primeicons/primeicons.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import router from './router'
import PrimeVue from 'primevue/config'
import ToastService from 'primevue/toastservice'
import ConfirmationService from 'primevue/confirmationservice'
import Ripple from 'primevue/ripple'

import { RavenwatcherTheme } from './theme.ts'
import App from './App.vue'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(PrimeVue, {
  ripple: true,
  theme: {
    preset: RavenwatcherTheme,
    options: {
      darkModeSelector: ':root', // disable system dark mode
    },
  },
})
app.use(ConfirmationService)
app.use(ToastService)

app.directive('ripple', Ripple)
app.mount('#app')
