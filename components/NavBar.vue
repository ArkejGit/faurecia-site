<template>
	<b-navbar toggleable fixed="top" type="dark" :class="{ 'navbar--background': scrollPosition > 0 || showCollapse }">
		<div class="container navbar-container">
			<b-navbar-brand href="/">
				<img src="~/assets/faurecia-logo.svg" alt="Faurecia logo">
			</b-navbar-brand>
			<b-navbar-toggle target="nav_text_collapse" />
			<b-collapse id="nav_text_collapse" v-model="showCollapse" is-nav>
				<b-navbar-nav>
					<nuxt-link to="/" class="nav-link">sub-site-1</nuxt-link>
					<nuxt-link to="/" class="nav-link">sub-site-2</nuxt-link>
				</b-navbar-nav>
			</b-collapse>
		</div>
	</b-navbar>
</template>

<script>
export default {
	data: function () {
		return {
			scrollPosition: null,
			showCollapse: false
		}
	},
	mounted() {
		window.addEventListener('scroll', this.updateScroll)
	},
	methods: {
		updateScroll() {
			this.scrollPosition = window.scrollY
		}
	},
	destroy() {
		window.removeEventListener('scroll', this.updateScroll)
	}
}
</script>

<style lang="sass">
.navbar
	transition: background .5s ease
	background: rgba(40,46,130, 0)
.navbar--background
	background: rgba(40,46,130, .8)

.navbar-brand
	img
		width: 100px
</style>
