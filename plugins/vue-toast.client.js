import Toast from 'vue-toastification'
import 'vue-toastification/dist/index.css'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(Toast, {
    hideProgressBar: true,
    maxToasts: 5,
    pauseOnFocusLoss: false,
    timeout: 4000
  })
})
