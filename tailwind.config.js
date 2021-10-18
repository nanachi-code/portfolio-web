const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
	mode: "jit",
	purge: ["./components/**/*.vue", "./pages/**/*.vue"],
	darkMode: "media",
	theme: {
		extend: {
			fontFamily: {
				sans: ["Nexa", ...defaultTheme.fontFamily.sans],
			},
		},
	},
	variants: {
		extend: {},
	},
}
