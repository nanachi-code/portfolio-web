<template>
	<div id="about">
		<Header page="About me"></Header>

		<Container>
			<div class="px-32">
				<section class="grid grid-cols-4 gap-4 py-5">
					<div class="col-span-1">
						<img class="object-cover rounded-full" src="~/assets/img/avatar.jpeg" />
					</div>

					<div class="col-span-3 flex">
						<div class="self-center">
							<h3 class="text-3xl font-bold">Dinh Vu</h3>
							<h4>09/25/2000</h4>
							<h4>Full-stack developer</h4>
						</div>
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
					<header>
						<span class="underline text-xl">Facts</span> <span class="far fa-smile-wink"></span>
					</header>

					<ul class="list-disc list-outside">
						<li>
							My nickname (Nanachi) is named after
							<a class="text-red-500 underline" href="https://madeinabyss.fandom.com/wiki/Nanachi"
								>a character in manga/anime series Made in Abyss.</a
							>
						</li>
						<li>I enjoy playing League of Legends and osu! in my free time.</li>
						<li>I also love music.</li>
						<li>I used to study art but soon figured I didn't have the talent for it :(</li>
					</ul>
				</section>

				<section class="py-5">
					<header>
						<span class="underline text-xl">Social</span> <span class="fas fa-share-alt"></span>
					</header>

					<a
						class="inline-block p-3 transition duration-300 rounded-md hover:bg-red-500"
						href="https://github.com/nanachi-code"
						><span class="fab fa-github"></span> nanachi-code</a
					>
					<a
						class="inline-block p-3 transition duration-300 rounded-md hover:bg-red-500"
						href="https://facebook.com/SmugNanachi"
						><span class="fab fa-facebook"></span> Đinh Vũ</a
					>
					<a
						class="inline-block p-3 transition duration-300 rounded-md hover:bg-red-500"
						href="https://www.youtube.com/channel/UCwKAldPUtaSwemUjiXNjOTQ"
						><span class="fab fa-youtube"></span> Nanachi
					</a>

					<a
						class="inline-block p-3 transition duration-300 rounded-md hover:bg-red-500"
						href="https://osu.ppy.sh/users/10063190">
						<img class="inline-block osu-logo" src="~/assets/img/osu-logo-invert.png" /> Smug Nanachi
					</a>

					<button
						ref="copyDiscord"
						class="
							copyDiscord
							inline-block
							p-3
							transition
							duration-300
							rounded-md
							hover:bg-red-500
							relative
						"
						@click="copyDiscordTag"
						@mouseout="resetTooltip">
						<span class="fab fa-discord"></span> Nanachi#1381

						<div ref="tooltip" class="tooltip transition duration-300" :class="{ copied: copied }">
							{{ tooltip }}
							<div class="arrow"></div>
						</div>
					</button>
				</section>
			</div>
		</Container>
	</div>
</template>

<script>
export default {
	layout: "has-navbar",
	data() {
		return {
			isHovering: false,
			tooltip: "click to copy to clipboard",
			copied: false,
		}
	},
	head() {
		return {
			title: "Nanachi - About",
		}
	},
	methods: {
		async copyDiscordTag() {
			await navigator.clipboard.writeText("Nanachi#1381")
			this.tooltip = "copied"
			this.copied = true
		},
		resetTooltip() {
			this.tooltip = "click to copy to clipboard"
			this.copied = false
		},
	},
}
</script>

<style scoped>
.copyDiscord:hover .tooltip {
	opacity: 1;
}

.tooltip {
	background: #333;
	color: white;
	font-weight: bold;
	padding: 4px 8px;
	font-size: 13px;
	border-radius: 4px;
	opacity: 0;
	position: absolute;
	width: 170px;
	bottom: -34px;
	left: -9px;
}

.tooltip.copied {
	width: 70px;
	left: 43px;
}

.tooltip .arrow,
.tooltip .arrow::before {
	position: absolute;
	width: 8px;
	height: 8px;
	background: inherit;
}

.tooltip.copied .arrow {
	visibility: hidden;
	top: -4px;
	left: 29px;
}

.tooltip .arrow {
	visibility: hidden;
	top: -4px;
	left: 81px;
}

.tooltip .arrow::before {
	visibility: visible;
	content: "";
	transform: rotate(45deg);
}
</style>
