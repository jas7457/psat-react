const colors = require('tailwindcss/colors');
const plugins = require('./config/tailwindPlugins');

module.exports = {
	mode: 'jit',
	purge: ['./src/**/*.{js,jsx,ts,tsx}', './index.html'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		colors: {
			primary: {
				light: '#028adb',
				DEFAULT: '#0277BD',
				dark: '#02619a',
			},
			secondary: {
				light: '#607e8c',
				DEFAULT: '#546E7A',
				dark: '#455b65',
			},
			warning: {
				light: '#ff7b0f',
				DEFAULT: '#EF6C00',
				dark: '#cb5c00',
			},
			danger: { light: '#d63636', DEFAULT: '#C62828', dark: '#a82222' },
			success: {
				light: '#41a445',
				DEFAULT: '#388E3C',
				dark: '#2e7431',
			},
			transparent: 'transparent',
			current: 'currentColor',
			white: '#fff',
			black: '#000',
			gray: colors.gray,
		},
	},
	variants: {
		extend: {},
	},
	plugins: [plugins.outlinePlugin],
};
