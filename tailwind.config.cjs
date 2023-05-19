module.exports = {
	content: ['./src/**/*.{html,js,jsx}', './public/index.html'],
	mode: 'jit',
	darkMode: 'class',

	theme: {
		fontFamily: {
			sans: ['Montserrat', 'sans-serif'],
			h2: ['Iceland', 'cursive'],
		},
		extend: {
			backgroundImage: {
				'signIn': `url("./assets/signIn.jpg")`,
				'test': `url("./assets/test.jpg")`,
			},
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
				'gray80': 'rgba(255, 255, 255, 0.4)',
				'gray10': 'rgba(211, 211, 211, 0.1))'
			},
			rotate: {
				'1080': '-1080deg',
			},
			transitionDuration: {
				'2000': '2000ms',
			},
			textUnderlineOffset: {
				'h2': '10px',
			}
		},
		screens: {
			'mobile': '375px',
			'tablet': '768px',
			'computer': '1024px',
			'large': '1440px',
		}
	},
	plugins: [],
};
