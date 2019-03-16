<template>
	<div class="tile">
		<img :src="require(`@/assets/${image}`)" alt="">
		<h2>{{ title }}</h2>
	</div>
</template>

<script>
export default {
	props: {
		image: String,
		title: String
	}
}
</script>

<style lang="sass" scoped>
.tile
	background-color: #fff
	box-shadow: 0px 0px 8px rgba(0,0,0,0.1)
	padding: 2em
	display: flex
	flex-direction: column
	align-items: center
	justify-content: space-around
	transition: box-shadow .5s ease
	&:hover
		box-shadow: 0px 0px 8px rgba(0,0,0,0.3)
	img
		width: 80%
		margin-bottom: 1em
	h2
		font-size: 1.5em
</style>
