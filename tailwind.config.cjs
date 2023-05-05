module.exports = {
	content: ['./src/**/*.{html,js,jsx}', './public/index.html'],
	mode: 'jit',
	darkMode: 'class',

	theme: {
		fontFamily: {
			sans: ['Inter', 'sans-serif'],
		},
		extend: {
			spacing: {
				'8xl': '96rem',
				'9xl': '128rem',
			},
			borderRadius: {
				'4xl': '2rem',
			},
			colors: {
				'primary': '#0f172a',
				'primary-half': 'rgba(15, 23, 42, 0.25)',
				'secondary': '#1c2538',
				'secondary-half': 'rgba(28, 37, 56, 0.25)',
				'highlight': '#32a1d6',
				'white': '#FFFFFF',
				'transparent': 'transparent',
				'husky': '#EEEEEE',
				'black': '#000000',
				'green': '#00FF00',
				'blue': '#0000FF',
			},
			rotate: {
				'1080': '-1080deg',
			},
			transitionDuration: {
				'2000': '2000ms',
			},
		},
	},
	plugins: [],
};
