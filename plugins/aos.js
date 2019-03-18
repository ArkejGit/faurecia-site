import Vue from 'vue'

import AOS from 'aos'

Vue.use(AOS.init({
	duration: 800,
	once: false,
	offset: 0,
	anchorPlacement: 'center-bottom'
}))
