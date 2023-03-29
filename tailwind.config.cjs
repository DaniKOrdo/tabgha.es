/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			backgroundImage: {
				'portals-nous': "url('/img/portals-nous.jpg')",
				'tabgha-beach': "url('/img/tabgha-beach.jpeg')"
			},
			colors: {
				'tg-one': '#1E2B61',
				'tg-two': '#49537E',
				'tg-three': '#254B5E',
				'tg-four': '#3B8686',
				'tg-sand': '#faeed7',
				'tg-navbar': '#fdf7e1',
				'tb-postHeader': '#1e2b61'
			},
			fontFamily: {
				'tg-title': ['Manrope']
			}
		},
	},
	plugins: [],
}
