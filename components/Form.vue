<template>
<div>
	<b-form inline @submit="onSubmit">
		<b-form-row>
			<b-form-select v-model="form.position" :options="positions" />
			<b-form-select v-model="form.type" :options="types" />
			<b-form-select v-model="form.place" :options="places" />
		</b-form-row>
		<b-form-row>
			<b-button type="submit">Wyszukaj oferty</b-button>
		</b-form-row>
	</b-form>
</div>
</template>

<script>
export default {
	data() {
		return {
			form: {
				position: 'Manager',
				type: 'Praktyki',
				place: 'R&D - Grójec i Wałbrzych'
			},
			positions: ['Manager', 'Inżynier', 'IT'],
			types: ['Praktyki', 'Praca'],
			places: ['R&D - Grójec i Wałbrzych', 'Grójec', 'Gorzów Wielkopolski', 'Legnica', 'IT - Łódź']
		}
	},
	methods: {
		onSubmit(evt) {
			evt.preventDefault()
			alert(JSON.stringify(this.form))
		}
	}
}
</script>

<style lang="sass">
.form-inline
	flex-direction: column

form
	.form-row
		width: 100%
		justify-content: space-around
		margin: 2em 0

	.custom-select
		border: none
		border-bottom: 2px solid $pink
		border-radius: 0
		min-width: 20%
		margin: 0 1em
		font-size: 1.5em
		color: $blue
		font-weight: 700
		display : inline-block
		background: url('/arrow-down.png') no-repeat right 0.75rem center/8px 10px
		&:focus
			border: none
			border-bottom: 2px solid $pink
			box-shadow: 0px 0px 8px rgba(0,0,0,0.1)
		&:after
			content: "▼"
			position: absolute
			z-index: 1
			top: 0
			right: 0
			height: 100%
			width: 2em
			padding-top: .1em
			color: $pink
			text-align: center

	.btn
		color: #fff
		font-size: 1.2em
		font-weight: 600
		background-color: $pink
		padding: .5em 3em
		border: none
		box-shadow: 0px 0px 10px rgba(224,0,105, 0.5)
		transition: box-shadow .3s ease
		&:hover, &:focus
			background-color: $pink
			box-shadow: 0px 0px 15px rgba(224,0,105, 1)
	.btn-secondary:not(:disabled):not(.disabled):active
		background-color: $blue
		box-shadow: 0px 0px 10px rgba(41,43,130, 0.5)

@media only screen and (max-width: $md)
	form
		.form-row
			flex-direction: column
		.custom-select
			margin: 1em 0
</style>
