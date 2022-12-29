import VueGtag from 'vue-gtag'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(
    VueGtag,
    {
      config: {
        id: 'G-HPKCKKH20R',
      },
    },
    nuxtApp.$router
  )
})
