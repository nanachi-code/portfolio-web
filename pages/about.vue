<template>
	<div id="about">
		<Header page="About me"></Header>

		<Container>
			<div class="px-32">
				<section class="grid grid-cols-4 gap-4 py-5">
					<div class="col-span-1">
						<img class="object-cover rounded-full" src="~/assets/img/avatar.jpeg" />
					</div>

					<div class="col-span-3">
						<h3 class="text-3xl font-bold">Dinh Vu</h3>
						<h4>09/25/2000</h4>
						<h4>Full-stack developer</h4>
					</div>
				</section>

				<section class="py-5">
					<header>
						<span class="underline text-xl">Education</span> <span class="fas fa-graduation-cap"></span>
					</header>
					<div class="grid grid-cols-6 gap-4">
						<div class="col-span-1">2018</div>
						<div class="col-span-5">Graduated from Nguyen Hue High School for the Gifted</div>
					</div>
					<div class="grid grid-cols-6 gap-4">
						<div class="col-span-1">Now</div>
						<div class="col-span-5">
							Studying Applied mathematics at University of Transport and Communications
						</div>
					</div>
				</section>

				<section class="py-5">
					<header>
						<span class="underline text-xl">Work</span> <span class="fas fa-laptop-code"></span>
					</header>

					<div class="grid grid-cols-6 gap-4">
						<div class="col-span-1">2020-2021</div>
						<div class="col-span-5">Intern at SlimCRM</div>
					</div>
				</section>

				<section class="py-5">
					<span class="underline text-xl">Facts</span> <span class="far fa-smile-wink"></span>
					<ul class="list-disc list-outside">
						<li>
							My nickname (Nanachi) is named after
							<a class="text-blue-400 underline" href="https://madeinabyss.fandom.com/wiki/Nanachi">a character in manga/anime series Made in Abyss.</a>
						</li>
						<li>I enjoy playing League of Legends and osu! in my free time.</li>
						<li>I also love music.</li>
						<li>I used to study art but soon figured I didn't have the talent for it :(</li>
					</ul>
				</section>
			</div>
		</Container>
	</div>
</template>

<script>
export default {
	layout: "has-navbar",
	head() {
		return {
			title: "Nanachi - About",
		}
	},
}
</script>
