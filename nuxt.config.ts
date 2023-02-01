// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    strapi: {
      url: 'http://10.0.0.4:1337',
    },
    public: {
      strapi: {
        url: '',
      },
    },
  },
  app: {
    head: {
      link: [
        { rel: 'stylesheet', href: 'https://use.typekit.net/xig5nxp.css' },
      ],
    },
    pageTransition: { name: 'page', mode: 'out-in' },
  },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: [
    '@nuxt/content',
    '@nuxtjs/strapi',
  ],
  content: {},
})
