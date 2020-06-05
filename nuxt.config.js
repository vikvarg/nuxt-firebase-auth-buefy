
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#7957d5' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv',
    '@nuxtjs/firebase',
    'nuxt-buefy',
  ],
  firebase: {
    config: {
      apiKey: 'AIzaSyDSI4XoiHwtI7cveDtLRbd0nmWuzhXmriA',
      authDomain: 'nuxt-firebase-auth-a67fe.firebaseapp.com',
      databaseURL: 'https://nuxt-firebase-auth-a67fe.firebaseio.com',
      projectId: 'nuxt-firebase-auth-a67fe',
      storageBucket: 'nuxt-firebase-auth-a67fe.appspot.com',
      messagingSenderId: '1024307022955',
      appId: '1:1024307022955:web:54f250ea26f75affc2b52e',
      measurementId: 'G-ZEMGPJTWR4'
    },
    services: {
      auth: {
        persistance: 'local',
        initialize: {
          onAuthStateChangedAction: 'auth/firebase/onAuthStateChanged'
        },
        ssr: true
      }
    }
  },
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
