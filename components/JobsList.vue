<template>
	<div class="jobs">
		<table>
			<tr v-for="job in jobs">
				<td>{{ job.position }}</td>
				<td>{{ job.place }}</td>
				<td>{{ job.date }}</td>
			</tr>
		</table>
	</div>
</template>

<script>
export default {
	props: {
		jobs: Array
	}
}
</script>

<style lang="sass">
.jobs
	table
		width: 100%
		font-size: 1.2em
		color: #c0c0c0
		tr:hover
			box-shadow: 0px 0px 8px rgba(0,0,0,0.1)
		td
			padding: .5em
			cursor: default
		td:first-child
			color: $blue
			font-weight: 700
			width: 50%
			padding-left: 5em
		td:nth-child(3)
			padding-right: 5em

@media only screen and (max-width: $lg)
	.jobs
		table
			td, td:first-child, td:nth-child(3)
				padding: .5em
</style>
