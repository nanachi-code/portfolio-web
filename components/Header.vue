<template>
	<div class="parallax-bg px-64 py-24">
		<div class="text-center">
			<h1 class="text-5xl">
				{{ page }}
			</h1>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		page: String,
	},
}
</script>
<style>
.parallax-bg {
	background-image: url("~assets/img/intro.png");
	background-attachment: fixed;
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
}
</style>
