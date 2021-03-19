export default {
  // Target: https://go.nuxtjs.dev/config-target
  
  target: 'static',
  generate: {
    fallback: true,
    
  },
  apollo: {
    clientConfigs: {
      default: {
        httpEndpoint: process.env.BACKEND_URL || "https://localhost:1337/graphql"
      }
    }
  },
  env: {
    storeUrl: process.env.STORE_URL || "http://localhost:1337"
  },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'stocks',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'preconnect', href: "https://app.snipcart.com" },
      { rel: 'preconnect', href: "https://cdn.snipcart.com" },
      { rel: 'stylesheet', href: "https://cdn.snipcart.com/themes/v3.0.16/default/snipcart.css" },
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [
      
      { src: 'https://cdn.snipcart.com/themes/v3.0.31/default/snipcart.js'} 
    ]

  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/snipcart'
  ],
  snipcart: {
    key:'MTM5Yzg1MGQtNzM5MS00NDhkLWExNmItY2UxMzRiY2RjYzYyNjM3NTE1NDI2OTEwNzIxMjI1'
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    ['@nuxtjs/apollo',
    '@nuxtjs/axios']
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
