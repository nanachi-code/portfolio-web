<template>
	<div id="root" class="w-full">
		<div id="intro" class="flex flex-wrap justify-center mx-auto h-screen content-center flex-col">
			<h1 class="text-center font-bold font-sans text-9xl">Nanachi</h1>
			<h6 class="text-center font-bold text-2xl">&nbsp; {{ text }}</h6>

			<div class="flex justify-center my-5">
				<NuxtLink
					to="/about"
					class="
						border
						rounded-lg
						border-red-600
						p-2
						mr-3
						hover:bg-red-600 hover:text-white
						duration-300
						transition
						ease-in-out
					">
					About
				</NuxtLink>
				<NuxtLink
					to="/projects"
					class="
						border
						rounded-lg
						border-red-600
						p-2
						mr-3
						hover:bg-red-600 hover:text-white
						duration-300
						transition
						ease-in-out
					">
					Projects
				</NuxtLink>
				<button
					class="
						border
						rounded-lg
						border-red-600
						p-2
						hover:bg-red-600 hover:text-white
						duration-300
						transition
						ease-in-out
					"
					@click="toggleSocial()">
					Social
				</button>
			</div>

			<div
				class="
					flex
					justify-center
					content-center
					rounded-lg
					bg-red-600
					py-2
					duration-300
					transition
					ease-in-out
				"
				:class="showSocial ? 'opacity-100' : 'opacity-0'">
				<a href="https://github.com/nanachi-code" class="text-2xl mr-3 text-white">
					<i class="fab fa-github"></i>
				</a>

				<a href="https://www.facebook.com/SmugNanachi/" class="text-2xl mr-3 text-white"
					><i class="fab fa-facebook"></i>
				</a>

				<a href="https://www.youtube.com/channel/UCwKAldPUtaSwemUjiXNjOTQ" class="text-2xl mr-3 text-white"
					><i class="fab fa-youtube"></i>
				</a>

				<a href="https://osu.ppy.sh/users/10063190">
					<img class="osu-logo" src="~/assets/img/osu-logo.png" />
				</a>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	head() {
		return {
			title: "Nanachi - Homepage",
		}
	},
	data() {
		return {
			text: "",
			index: 0,
			texts: ["fullstack developer", "osu! mapper", "osu! storyboarder"],
			isDeleting: false,
			showSocial: false,
		}
	},
	created() {
		this.type()
	},
	methods: {
		type() {
			// Current index of word
			const current = this.index % this.texts.length
			// Get full text of current word
			const fullText = this.texts[current]

			// Check if deleting
			if (this.isDeleting) {
				// Remove char
				this.text = fullText.substring(0, this.text.length - 1)
			} else {
				// Add char
				this.text = fullText.substring(0, this.text.length + 1)
			}

			// Initial Type Speed
			let typeSpeed = 150

			if (this.isDeleting) {
				typeSpeed /= 2
			}

			// If word is complete
			if (!this.isDeleting && this.text === fullText) {
				// Make pause at end
				typeSpeed = 2000
				// Set delete to true
				this.isDeleting = true
			} else if (this.isDeleting && this.text === "") {
				this.isDeleting = false
				// Move to next word
				this.index++
				// Pause before start typing
				typeSpeed = 500
			}

			setTimeout(() => this.type(), typeSpeed)
		},
		toggleSocial() {
			this.showSocial = !this.showSocial
		},
	},
}
</script>

<style>
#intro {
	background-image: url("~assets/img/intro.png");
}

.osu-logo {
	width: 28px;
	height: 28px;
}
</style>


