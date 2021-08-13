import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NotFoundContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

export const NotFoundSvgContainer = styled.div`
	width: 300px;
`;

export const NotFoundLink = styled(Link)`
	font-size: 1.5em;
	transition: 0.3s ease-in-out;

	&:hover {
		color: ${({ theme }) => theme.palette.primary.main};
	}
`;
