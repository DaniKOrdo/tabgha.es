/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			backgroundImage: {
				'portals-nous': "url('/img/portals-nous.jpg')"
			},
			colors: {
				'tg-one': '#CFF09E',
				'tg-two': '#A8DBA8',
				'tg-three': '#79BD9A',
				'tg-four': '#3B8686'
			},
			fontFamily: {
				'tg-title': ['Lobster']
			}
		},
	},
	plugins: [],
}
