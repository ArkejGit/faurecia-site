<template>
	<section class="faurecia-in-poland">
		<div class="container">
			<div class="row">
				<div class="d-none d-lg-block col-lg-3">
					<ul data-aos="fade">
						<li data-city="grojec">Grójec</li>
						<li data-city="grojec">Grójec i Wałbrzych R&D</li>
						<li data-city="gorzow">Gorzów Wielkopolski</li>
						<li data-city="legnica">Legnica</li>
						<li data-city="jelcz">Jelcz-Laskowice</li>
						<li data-city="walbrzych">Wałbrzych</li>
						<li data-city="lodz">Łódź IT Support</li>
					</ul>
					<div class="poland-dotted-container" data-aos="fade">
						<img class="poland-dotted" src="/poland-dotted.jpg" alt="">
						<div class="dot" data-top="51.8%" data-left="67.3%" data-city="grojec"></div>
						<div class="dot" data-top="30.05%" data-left="12%" data-city="gorzow"></div>
						<div class="dot" data-top="64.5%" data-left="23.7%" data-city="legnica"></div>
						<div class="dot" data-top="69%" data-left="32%" data-city="jelcz"></div>
						<div class="dot" data-top="73.2%" data-left="23.7%" data-city="walbrzych"></div>
						<div class="dot" data-top="56%" data-left="52%" data-city="lodz"></div>
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
	mounted: function () {
		const dots = document.querySelectorAll('.dot')
		dots.forEach((dot) => {
			dot.style.top = dot.dataset.top
			dot.style.left = dot.dataset.left
		})

		const lis = document.querySelectorAll('li[data-city]')
		lis.forEach((li) => {
			const city = li.dataset.city
			const dot = document.querySelector(`.dot[data-city=${city}]`)
			li.addEventListener('mouseenter', () => {
				dot.style.opacity = 0.7
			})
			li.addEventListener('mouseleave', () => {
				dot.style.opacity = 0
			})
		})
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
</style>
