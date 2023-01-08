import AOS from 'aos'

import 'aos/dist/aos.css'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.AOS = AOS.init() // eslint-disable-line new-cap
})