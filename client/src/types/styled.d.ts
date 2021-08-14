import 'styled-components';

interface IPalette {
	main: string;
	text: string;
}

interface IBreakpoints {
	mobile: string;
	tablet: string;
	laptop: string;
	desktop: string;
}

declare module 'styled-components' {
	export interface DefaultTheme {
		breakpoints: IBreakpoints;
		palette: {
			common: {
				black: string;
				gray: string;
				white: string;
				danger: string;
			};
			primary: IPalette;
		};
	}
}
