<template>
	<section class="faurecia-in-poland">
		<div class="container">
			<div class="row">
				<div class="d-none d-lg-block col-lg-3">
					<ul data-aos="fade">
						<li v-for="branch in branches" @mouseover="showCities(branch.cities)" @mouseleave="hideCities(branch.cities)">{{ branch.name }}</li>
					</ul>
					<div class="poland-dotted-container" data-aos="fade">
						<img class="poland-dotted" src="/poland-dotted.jpg" alt="">
						<div v-for="city in cities" :class="{'dot-show': city.show}" class="dot" :style="{ top: `${city.top}%`, left: `${city.left}%` }"></div>
					</div>
				</div>
				<div class="image-container col-12 col-lg-9">
					<img src="/faurecia-in-poland.jpg" alt="" data-aos="fade">
					<div class="image-desc" data-aos="fade-left">
						<h1>Faurecia w Polsce</h1>
						<p>Działamy w Polsce już od 20 lat i pracujemy w 9 zakładach produkcyjnych, a także w ramach dwóch zespołów R&D, Centrum Księgowo-Finansowego oraz Centrum Wsparcia IT.: W Polsce ulokowane są również funkcje wspierające globalne procesy, takie jak zakupy, zarządzanie łańcuchem dostaw, zarządzanie programami i inne.</p>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
export default {
	data() {
		return {
			grojec: false,
			branches: [
				{
					name: 'Grójec',
					cities: ['grojec']
				},
				{
					name: 'Grójec i Wałbrzych R&D',
					cities: ['grojec', 'walbrzych']
				},
				{
					name: 'Gorzów Wielkopolski',
					cities: ['gorzow']
				},
				{
					name: 'Legnica',
					cities: ['legnica']
				},
				{
					name: 'Jelcz-Laskowice',
					cities: ['jelcz']
				},
				{
					name: 'Wałbrzych',
					cities: ['walbrzych']
				},
				{
					name: 'Łódź IT Support',
					cities: ['lodz']
				}
			],
			cities: {
				grojec: {
					name: 'Grójec',
					top: '51.8',
					left: '67.3',
					show: false
				},
				gorzow: {
					name: 'Gorzów Wielkopolski',
					top: '30.05',
					left: '12',
					show: false
				},
				legnica: {
					name: 'Legnica',
					top: '64.5',
					left: '23.7',
					show: false
				},
				jelcz: {
					name: 'Jelcz-Laskowice',
					top: '69',
					left: '32',
					show: false
				},
				walbrzych: {
					name: 'Wałbrzych',
					top: '73.2',
					left: '23.7',
					show: false
				},
				lodz: {
					name: 'Łódź',
					top: '56',
					left: '52',
					show: false
				}
			}
		}
	},
	methods: {
		showCities(cities) {
			cities.forEach((city) => {
				this.cities[city].show = true
			})
		},
		hideCities(cities) {
			cities.forEach((city) => {
				this.cities[city].show = false
			})
		}
	}
}
</script>

<style lang="sass">
+keyframes(pulse)
	0%
		box-shadow: 0 0 0 0px rgba(195, 20, 106, 0.5)
	100%
		box-shadow: 0 0 0 15px rgba(0, 0, 0, 0)

.faurecia-in-poland
	ul
		list-style: none
		padding: 0
		margin-bottom: 30px
		li
			font-weight: 700
			transition: color .3s ease
			cursor: default
			&:hover
				color: $pink
	h1
		color: $blue
	img
		width: 100%
	.image-desc
		position: absolute
		width: 50%
		bottom: 0
		right: 15px
		background-color: #fff
		padding: 2em
		box-shadow: 4px 4px 8px rgba(0,0,0,0.15)
@media only screen and (max-width: $xl)
	.faurecia-in-poland
		.image-desc
			width: 70%
@media only screen and (max-width: $lg)
	.faurecia-in-poland
		.image-desc
			position: static
			width: 100%

.poland-dotted-container
	max-width: 200px
	position: relative
	.dot
		position: absolute
		width: 8px
		height: 8px
		border-radius: 50%
		background-color: $pink
		opacity: 0
		transition: opacity .5s ease
		animation: pulse 1s infinite
	.dot-show
		opacity: .7
</style>
