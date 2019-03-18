<template>
<div>
	<b-form inline @submit="onSubmit">
		<b-form-row>
			<b-form-select v-model="form.position" :options="positions" />
			<b-form-select v-model="form.type" :options="types" />
			<b-form-select v-model="form.place" :options="places" />
			<b-button type="submit" :class="{'btn-inline': jobs}">{{ loading ? 'Szukam...' : 'Wyszukaj oferty' }}</b-button>
		</b-form-row>
	</b-form>
</div>
</template>

<script>
const dummyData = [
	{
		position: 'Serial Buyer',
		place: 'Gorzów Wielkopolski, lubuskie',
		date: '2019-03-18'
	},
	{
		position: 'Młodszy Specjalista w Dziale Transportu',
		place: 'Gorzów Wielkopolski, lubuskie',
		date: '2019-03-18'
	},
	{
		position: 'Inżynier ds. Optymalizacji Procesu - Method Engineer',
		place: 'Gorzów Wielkopolski, lubuskie',
		date: '2019-03-18'
	}
]

const mockGetJobs = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve(dummyData)
	}, 5000)
})

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
			places: ['R&D - Grójec i Wałbrzych', 'Grójec', 'Gorzów Wielkopolski', 'Legnica', 'IT - Łódź'],
			loading: false,
			jobs: false
		}
	},
	methods: {
		onSubmit(evt) {
			evt.preventDefault()
			this.loading = true
			mockGetJobs.then((data) => {
				this.loading = false
				this.jobs = true
				this.$emit('getJobs', data)
			})
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
		transition: all .3s ease
		margin: 2em 30%
		&:hover, &:focus
			background-color: $pink
			box-shadow: 0px 0px 15px rgba(224,0,105, 1)
	.btn-inline
		margin: 0
	.btn-secondary:not(:disabled):not(.disabled):active
		background-color: $blue
		box-shadow: 0px 0px 10px rgba(41,43,130, 0.5)

@media only screen and (max-width: $xl)
	form
		.custom-select
			min-width: 20%
			margin: 0

@media only screen and (max-width: $lg)
	form
		.form-row
			flex-direction: column
		.custom-select
			margin: 1em 0
		.btn, .btn-inline
			margin: 2em 0
</style>
