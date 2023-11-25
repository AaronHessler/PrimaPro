// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  nitro: {
    compressPublicAssets: true,
  },
  modules: [
    '@nuxtjs/tailwindcss',
    'nuxt-icon'
  ],
  app: {
    pageTransition: {
      name: 'page',
      mode: 'out-in' // default
    },
    head: {
      title: "Prima Pro",
      charset: 'utf-8',
      meta: [
        { name: 'description', content: 'A digital learning enviorment for Prima Nova.' }
      ],
      viewport: 'width=device-width, initial-scale=1',
      htmlAttrs: {
        lang: 'en'
      }
    }
  },
  devtools: { enabled: false },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/scss/vars.scss" as *;',
        },
      },
    },
  },
  css: ["@/assets/scss/global.scss"],
})
