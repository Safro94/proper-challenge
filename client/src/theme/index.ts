// theme.ts
import { DefaultTheme } from 'styled-components';

const breakpoints = {
	mobile: '425px',
	tablet: '780px',
	laptop: '992px',
	desktop: '1240px',
};

export const theme: DefaultTheme = {
	breakpoints: {
		mobile: `(min-width: ${breakpoints.mobile})`,
		tablet: `(min-width: ${breakpoints.tablet})`,
		laptop: `(min-width: ${breakpoints.laptop})`,
		desktop: `(min-width: ${breakpoints.desktop})`,
	},

	palette: {
		common: {
			black: '#222831',
			gray: '#eee',
			white: '#ffffff',
			danger: '#df4759',
		},

		primary: {
			main: '#54bf7d',
			text: '#ffffff',
		},
	},
};
