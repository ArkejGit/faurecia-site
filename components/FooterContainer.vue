<template>
	<div class="footer__container col-6 col-md-3">
		<nav>
			<section>
				<h1>{{ title }}</h1>
				<ul>
					<li v-for="link in links">
						<a href="#">
							{{ link }}
						</a>
					</li>
				</ul>
			</section>
		</nav>
	</div>
</template>

<script>
export default {
	props: {
		title: String,
		links: Array
	}
}
</script>

<style lang="sass" scoped>
nav
	display: inline-block
	float: right

ul
	padding: 0
	margin: 0

li
	line-height: 2em

@media only screen and (max-width: $md)
	nav
		float: left
	.footer__container + .footer__container
		margin-top: 50px
</style>
