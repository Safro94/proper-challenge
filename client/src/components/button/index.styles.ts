import styled, { DefaultTheme } from 'styled-components';

import { ButtonTypes } from '../../types';

const variantStyles = (theme: DefaultTheme, variant = 'primary') =>
	({
		primary: `
			background-color: ${theme.palette.primary.main};
			color: ${theme.palette.primary.text};
			border: 1px solid ${theme.palette.primary.main};

			&:hover {
				color: ${theme.palette.primary.main};
			}
		`,

		danger: `
			background-color: ${theme.palette.common.danger};
			color: ${theme.palette.primary.text};
			border: 1px solid ${theme.palette.common.danger};

			&:hover {
				color: ${theme.palette.common.danger};
			}
		`,
	}[variant]);

export const ButtonBase = styled.button<{ variant: ButtonTypes }>(
	({ theme, variant }) => `
	padding: 10px;
	border-radius: 6px;
	cursor: pointer;
	transition: 0.3s ease-in-out;
	font-weight: bold;

	${variantStyles(theme, variant)};

	&:hover {
		background-color: ${theme.palette.common.white};
	}
`
);
