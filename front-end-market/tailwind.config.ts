import type { Config } from 'tailwindcss'
const twColors = require('tailwindcss/colors')

const colors = {
	transparent: twColors.transparent,
  black: twColors.black,
  white: twColors.white,
  primary: '',
  secondary: '',
  'bg-color': '',

}

const config: Config = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}'
	],
	theme: {
    colors,
		extend: {
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic':
					'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
			}
		}
	},
	plugins: []
}
export default config