// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // nitro: {
  //   firebase: {
  //     gen: 2
  //   }
  // },
  runtimeConfig: {
    public: {
      API_URL: process.env.API_URL
    }
  },
  modules: [
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt'
  ],
  css: [
    '@/assets/scss/main.scss',
    '@fortawesome/fontawesome-svg-core/styles.css',
  ],
  build: {
    transpile: [
      '@fortawesome/fontawesome-pro',
      '@fortawesome/fontawesome-svg-core',
      '@fortawesome/free-brands-svg-icons',
      '@fortawesome/pro-light-svg-icons',
      '@fortawesome/pro-regular-svg-icons',
      '@fortawesome/pro-solid-svg-icons',
      '@fortawesome/sharp-light-svg-icons',
      '@fortawesome/sharp-regular-svg-icons',
      '@fortawesome/sharp-solid-svg-icons',
      '@fortawesome/pro-thin-svg-icons',
      '@fortawesome/vue-fontawesome',
      'vue-toastification'
    ]
  },
  components: [
    {
      path: '~/components',
      pathPrefix: false
    }
  ],
  imports: {
    dirs: [
      'composables',
      'composables/*',
      'composables/**'
    ]
  }
})
