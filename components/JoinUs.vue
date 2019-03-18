<template>
	<section class="join-us">
		<div class="container">
			<h1 data-aos="fade">Dołącz do nas</h1>
			<Form data-aos="fade" @getJobs="getJobs" />
			<transition name="fade">
				<JobsList v-if="jobs" :jobs="jobs" />
			</transition>
		</div>
		<img class="car-image" src="~assets/car.svg" alt="" data-aos="fade-right">
		<img class="arm-image" src="/arm.png" alt="" data-aos="fade-left">
	</section>
</template>

<script>
import Form from '~/components/Form'
import JobsList from '~/components/JobsList'

export default {
	components: {
		Form,
		JobsList
	},
	data() {
		return {
			jobs: null
		}
	},
	methods: {
		getJobs(jobs) {
			this.jobs = jobs
			console.log(this.jobs) //eslint-disable-line
		}
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
	.jobs
		max-height: 100%

.fade-enter-active, .fade-leave-active
  transition: all 1.5s
.fade-enter, .fade-leave-to
  opacity: 0
  max-height: 0
  height: 0

@media only screen and (max-width: $md)
	.join-us
		padding-top: 0
		img
			display: none
</style>
