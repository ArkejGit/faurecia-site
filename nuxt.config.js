import pkg from './package'

export default {
	mode: 'spa',
	router: {
		fallback: true
	},
	head: {
		title: pkg.name,
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ hid: 'description', name: 'description', content: pkg.description }
		],
		link: [
			{ rel: 'icon', type: 'image/x-icon', href: '/fav.ico' }
		]
	},
	loading: { color: '#fff' },
	loadingIndicator: {
		name: 'pulse',
		color: '#c3136a',
		background: 'white'
	},
	css: [
		'~/assets/custom.sass',
		'aos/dist/aos.css'
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
	plugins: [
		'@/plugins/aos.js'
	],
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
