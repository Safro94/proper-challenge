import styled from 'styled-components';

export const LanguageToogleButtonsContainer = styled.div`
	display: flex;
	gap: 3px;
`;

export const LanguageToogleButton = styled.button<{ isActive: boolean }>(
	({ theme, isActive }) => `
	padding: 5px;
	background-color: transparent;
	border: 1px solid ${theme.palette.common.white};
	color: ${theme.palette.primary.text};
	font-weight: bold;
	border-radius: 4px;
	cursor: pointer;
	transition: 0.3s ease-in-out;

	&:hover {
		background-color: ${theme.palette.common.white};
		color: ${theme.palette.primary.main};
		border-color: ${theme.palette.primary.main}
	}

	${
		isActive &&
		`
		background-color: ${theme.palette.common.white};
		color: ${theme.palette.primary.main};
		border-color: ${theme.palette.primary.main}
	`
	}

`
);
