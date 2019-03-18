<template>
	<div>
		<TopPhoto />
		<AboutUs />
		<FaureciaInPoland />
		<JoinUs />
	</div>
</template>

<script>
import TopPhoto from '~/components/TopPhoto.vue'
import AboutUs from '~/components/AboutUs.vue'
import FaureciaInPoland from '~/components/FaureciaInPoland.vue'
import JoinUs from '~/components/JoinUs.vue'

export default {
	components: {
		TopPhoto,
		AboutUs,
		FaureciaInPoland,
		JoinUs
	}
}
</script>

<style lang="sass">

</style>
