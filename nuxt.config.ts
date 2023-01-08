// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  imports: {
    dirs: ['store'],
  },
  modules: [
    '@nuxtjs/tailwindcss',
    [
      '@pinia/nuxt',
      {
        autoImports: [
          // automatically imports `defineStore`
          'defineStore', // import { defineStore } from 'pinia'
          // automatically imports `defineStore` as `definePiniaStore`
          ['defineStore', 'definePiniaStore'], // import { defineStore as definePiniaStore } from 'pinia'
        ],
      },
    ],
  ],

  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
    configPath: 'tailwind.config',
    exposeConfig: false,
    injectPosition: 0,
    viewer: true
  },
  css: [
    '~/assets/css/fixDaisy.css'
  ],
  plugins: [{ src: '~/plugins/aos.js', ssr: false, mode: 'client' }],
  app: {
    head: {
      link: [
        { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css' },
        // favicon
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      ],
      title: 'Undangan Khitan Alfonsus Briyan Rajendra Hartono',
      meta: [
        { charset: 'utf-8' },
        // Image thumbnail
        { name: 'image', property: 'og:image', content: '/cover.jpg' },
        // Image thumbnail
        { name: 'image', property: 'twitter:image', content: '/cover.jpg' },
        // Image thumbnail
        { name: 'image', property: 'twitter:image:src', content: '/cover.jpg' },
        // Image thumbnail
        { name: 'image', property: 'twitter:image:alt', content: '/cover.jpg' },
        // description
        { name: 'description', content: 'Undangan Khitan Alfonsus Briyan Rajendra Hartono Putra Bpk Bpk Mateus Priyo Indra Hartono, SE & Ibu Agata Asri Wijayaningsih, SE. MM' },
      ],
    }
  }
})
