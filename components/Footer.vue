<template>
	<footer>
		<div class="container">
			<div class="row">
				<div class="col-6 col-md-3 footer__images">
					<div class="row">
						<img src="~/assets/faurecia-logo.svg" alt="Faurecia logo">
					</div>
					<div class="row">
						<img src="~/assets/top-employer-europe.svg" alt="Top Employer Europe Badge">
						<img src="~/assets/top-employer-poland.svg" alt="Top Employer Europe Poland">
					</div>
				</div>
				<FooterContainer title="Faurecia HR" :links="['Take a seat', 'Being Faurecia', 'Dołącz do nas', 'Kontakt']" />
				<FooterContainer title="Fabryki" :links="['Gorzów', 'Wałbrzych']" />
				<FooterContainer title="Pozostałe" :links="['Faurecia', 'Polityka prywatności']" />
			</div>
		</div>
	</footer>
</template>

<script>
import FooterContainer from '~/components/FooterContainer.vue'

export default {
	components: {
		FooterContainer
	}
}
</script>

<style lang="sass">
footer
	padding: 50px 0
	background-color: $blue
	.footer__images
		display: flex
		flex-direction: column
		justify-content: space-between
	ul
		list-style: none
	h1, a
		color: #fff
		text-decoration: none
		font-size: 1em
	a
		font-weight: 300
		transition: .3s ease
		&:hover
			color: #fff
			text-decoration: none
			opacity: .8
	img
		width: 45%
		height: 100%
		+ img
			margin-left: 15px

@media only screen and (max-width: $md)
	footer
		.footer__images
			justify-content: space-around
			.row
				margin: 0
</style>
