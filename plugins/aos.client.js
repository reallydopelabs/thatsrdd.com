import AOS from 'aos'

import "aos/dist/aos.css"

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.AOS = new AOS.init({
    offset: 0,
    duration: 750,
    once: true,
    easing: 'ease-in-out',
    anchorPlacement: 'top-center',
  })

  nuxtApp.vueApp.use(AOS)
})
