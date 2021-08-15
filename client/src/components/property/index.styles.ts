import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const PropertyItem = styled.li(
	({ theme }) => `
	padding: 20px;
	border: 1px solid ${theme.palette.primary.main};
	border-radius: 6px;
`
);

export const PropertyContainer = styled.div`
	display: grid;
	gap: 15px;
	min-height: 100%;
	grid-template-rows: 1fr 1fr;
`;

export const PropertyButtonsContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 10px;
`;

export const PropertyImageContainer = styled.div`
	height: 150px;
`;

export const PropertyImage = styled.img`
	height: 100%;
	width: auto;
`;

export const PropertyLink = styled(Link)(
	({ theme }) => `
	background-color: ${theme.palette.primary.main};
	color: ${theme.palette.primary.text};
	border: 1px solid ${theme.palette.primary.main};
	padding: 10px;
	border-radius: 6px;
	cursor: pointer;
	z-index: 10;
	transition: 0.3s ease-in-out;
	font-weight: bold;
	text-align: center;

	&:hover {
		background-color: ${theme.palette.common.white};
		color: ${theme.palette.primary.main};
	}
`
);
