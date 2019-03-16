<template>
	<section class="about-us">
		<div class="container">
			<div class="row">
				<div class="col-12 col-lg-4 col-xl-3">
					<h1>Kim jesteśmy?</h1>
					<p>Jesteśmy jednym ze światowych liderów w branży motoryzacyjnej. Działamy w 34 krajach tworząc ponad 100 tysięcy miejsc pracy w 300 zakładach produkcyjnych i 30 ośrodkach badawczo-rozwojowych na świecie.</p>
					<p>Specjalizujemy się w projektowaniu i produkcji Specjalizujemy się w projektowaniu i produkcji elementów wyposażenia samochodowego w trzech kluczowych dziedzinach:</p>
				</div>
				<div class="col-12 col-lg-8 col-xl-9 tiles-container">
					<Tile image="seat.svg" title="fotele samochodowe" />
					<Tile image="wheel.svg" title="wnętrza samochodowe" />
					<Tile image="exhaust.svg" title="technologie kontroli emisji spalin" />
				</div>
			</div>
		</div>
	</section>
</template>

<script>
import Tile from '~/components/Tile.vue'

export default {
	components: {
		Tile
	}
}
</script>

<style lang="sass">
.tiles-container
	height: 500px

.tile
	position: absolute
	width: 25%
	height: 55%

.tile:nth-child(1)
	color: $grey
	top: 10%
	left: 25%
	z-index: 1

.tile:nth-child(2)
	color: $blue
	left: 60%
	transform: translateX(-50%)
	bottom: 0

.tile:nth-child(3)
	color: $pink
	top: 50%
	transform: translateY(-50%)
	right: 5%
	z-index: 1

@media only screen and (max-width: $xl)
	.tiles-container
		height: 450px
	.tile
		width: 30%
	.tile:nth-child(1)
		left: 20%
	.tile:nth-child(3)
		right: 0

@media only screen and (max-width: $lg)
	.tiles-container
		height: auto
		display: flex
		flex-direction: row
		justify-content: space-between
	.tile
		position: static
		transform: none!important
		height: 250px
		width: 30%
		margin: 2em 0

@media only screen and (max-width: $md)
	.tile
		height: 200px
		font-size: .8em

@media only screen and (max-width: $sm)
	.tile
		height: 160px
		font-size: .6em
</style>
