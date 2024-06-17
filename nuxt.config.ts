// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['./assets/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  plugins: [
    { src: '~/plugins/vue-flicking.js' }
  ],
  modules: ['@nuxt/ui','nuxt-proxy'],
  experimental:{
    payloadExtraction: false
  },
  proxy: {
    options: {
      target: process.env.NUXT_BASE_URL,
      changeOrigin: true,
      pathRewrite: { '^/api': '' },
      pathFilter: [
        '/api'
      ]
    }
  },
  runtimeConfig: {
    public: {
      NUXT_BASE_URL: process.env.NUXT_BASE_URL,
      NUXT_GHOST_URL: process.env.NUXT_GHOST_URL,
      NUXT_GHOST_KEY: process.env.NUXT_GHOST_KEY
    }
  },
  colorMode:{
	  preference: 'light'
  }
})
