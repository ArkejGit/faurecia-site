<template>
	<section class="top-photo">
		<div class="container">
			<div class="top-photo__text">
				<p>Faurecia</p>
				<p>Take a seat</p>
				<p>Drive with us</p>
			</div>
		</div>
	</section>
</template>

<style lang="sass" scoped>
.top-photo
	height: 100vh
	background-image: url('/top-photo.jpg')
	background-repeat: no-repeat
	background-position: center
	background-size: cover
	color: #fff

.container
	position: relative
	height: 100%

.top-photo__text
	position: absolute
	left: 0
	bottom: 2em
	margin-left: 15px

p:nth-child(1)
	font-size: 1.6em
p:nth-child(2)
	font-size: 3.3em
	font-weight: 700
	text-transform: uppercase
p:nth-child(3)
	font-size: 2.5em
	font-family: 'danielbold'
</style>
