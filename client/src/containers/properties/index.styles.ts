import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const PropertyContainerText = styled.h1(
	({ theme }) => `
	text-align: center;
	color: ${theme.palette.primary.main}
`
);

export const PropertyContainerLink = styled(Link)(
	({ theme }) => `
	background-color: ${theme.palette.primary.main};
	color: ${theme.palette.primary.text};
	border: 1px solid ${theme.palette.primary.main};
	padding: 10px;
	border-radius: 6px;
	cursor: pointer;
	transition: 0.3s ease-in-out;
	font-weight: bold;
	text-align: center;
	display: flex;
	align-items: center;
	gap: 10px;
	width: fit-content;

	&:hover {
		background-color: ${theme.palette.common.white};
		color: ${theme.palette.primary.main};
	}
`
);

export const PropertyContainerLinkContainer = styled.div`
	display: flex;
	justify-content: flex-end;
	margin-bottom: 10px;
`;
