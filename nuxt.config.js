import pkg from './package'

export default {
  mode: 'universal',
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  loading: { color: '#fff' },
  css: [],
  plugins: [
  ],
  modules: [
    '@nuxtjs/axios',
    'bootstrap-vue/nuxt',
    '@nuxtjs/pwa',
    '@nuxtjs/style-resources'
  ],
  bootstrapVue: {
    bootstrapCSS: false,
    bootstrapVueCSS: false
  },
  styleResources: {
        sass: [
            '@assets/sass-variables.sass'
        ]
  },
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },
  build: {
    extend(config, ctx) {
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
