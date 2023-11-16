// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss'
  ],
  app: {
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
  devtools: { enabled: true },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  css: ["@/assets/scss/global.scss"],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/scss/vars.scss" as *;',
        },
      },
    },
  },
})
