import styled from 'styled-components';

export const PropertyDetailContainer = styled.div(
	({ theme }) => `
	display: grid;

	@media ${theme.breakpoints.mobile} {
		grid-template-columns: repeat(2, 1fr);
	}
`
);

export const PropertyDetailContainerWrapper = styled.div`
	display: flex;
	flex-direction: column;
`;

export const PropertyDetailInformationContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 15px;
`;

export const PropertyDetailTitle = styled.h2``;
