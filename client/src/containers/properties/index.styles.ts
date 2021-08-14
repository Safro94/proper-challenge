import styled from 'styled-components';

export const PropertyContainerText = styled.h1(
	({ theme }) => `
	text-align: center;
	color: ${theme.palette.primary.main}
`
);
