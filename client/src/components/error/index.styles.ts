import styled from 'styled-components';

export const ErrorContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	width: 80%;
	margin: auto;
`;

export const ErrorImage = styled.img`
	width: 150px;
	height: 150px;
`;

export const ErrorText = styled.h2`
	display: flex;
	flex-direction: column;
	text-align: center;
`;

export const ErrorGoBackTextContainer = styled.span`
	color: ${({ theme }) => theme.palette.primary.main};
	cursor: pointer;
`;
