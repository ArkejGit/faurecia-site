import Vue from 'vue'

import AOS from 'aos'
import 'aos/dist/aos.css'

Vue.use(AOS.init({
	duration: 800,
	once: false,
	offset: 0,
	anchorPlacement: 'center-bottom'
}))
