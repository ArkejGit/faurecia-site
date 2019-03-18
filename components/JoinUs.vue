<template>
	<section class="join-us">
		<div class="container">
			<h1>Dołącz do nas</h1>
			<Form />
		</div>
		<img class="car-image" src="~assets/car.svg" alt="">
		<img class="arm-image" src="/arm.png" alt="">
	</section>
</template>

<script>
import Form from '~/components/Form'

export default {
	components: {
		Form
	}
}
</script>

<style lang="sass">
.join-us
	position: relative
	padding-top: 150px
	margin: 50px 0
	h1
		color: $blue
		text-align: center
	.car-image
		width: 40%
		margin: 0 5%
	.arm-image
		position: absolute
		top: 0
		right: 0
		height: 200px

@media only screen and (max-width: $md)
	.join-us
		padding-top: 0
		img
			display: none
</style>
