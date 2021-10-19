<template>
	<div id="root" class="w-full">
		<intro />
	</div>
</template>

<script>
import Intro from "@/components/Intro.vue"

export default {
	components: {
		Intro,
	},
	head(){
		return {
			title: "Nanachi - Homepage"
		}
	}
}
</script>

<style>
@font-face {
	font-family: "Nexa";
	font-style: normal;
	font-weight: 400;
	font-display: swap;
	src: url("~assets/fonts/Nexa/NexaLight.otf") format("opentype");
}

@font-face {
	font-family: "Nexa";
	font-style: normal;
	font-weight: 700;
	font-display: swap;
	src: url("~assets/fonts/Nexa/NexaBold.otf") format("opentype");
}
</style>
