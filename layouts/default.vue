<template>
	<div>
		<NavBar />
		<nuxt />
		<Footer />
	</div>
</template>

<script>
import Footer from '~/components/Footer.vue'
import NavBar from '~/components/NavBar.vue'

export default {
	components: {
		Footer,
		NavBar
	}
}
</script>
