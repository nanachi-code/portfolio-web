<template>
	<Container>
		<div class="grid grid-cols-6 sticky py-3">
			<div class="col-span-1">
				<NuxtLink to="/" class="font-bold text-3xl mr-2"> Nanachi </NuxtLink>
			</div>

			<div class="col-auto flex items-end">
				<NuxtLink to="/about" class="mr-3 hover:underline"> About </NuxtLink>
				<NuxtLink to="/projects" class="mr-3 hover:underline"> Projects </NuxtLink>
			</div>
		</div>
	</Container>
</template>
