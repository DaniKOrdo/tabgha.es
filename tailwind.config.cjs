/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			backgroundImage: {
				'tabgha-beach': "url('/img/tabgha-beach.jpeg')",
				'tabgha-beach-mobile': "url('/img/tabgha-beach-mobile.jpeg')"
			},
			colors: {
				'tg-one': '#1E2B61',
				'tg-two': '#49537E',
				'tg-three': '#254B5E',
				'tg-four': '#3B8686',
				'tg-sand': '#e6be8f',
				'tg-navbar': '#fdf7e1',
				'tb-postHeader': '#1e2b61'
			},
			// fontFamily: {
			// 	'tg-title': ['Manrope', 'system-ui']
			// }
		},
	},
	plugins: [],
}
