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

export const PropertyDetailInformationContainer = styled.div(
	({ theme }) => `
	display: flex;
	flex-direction: column;
	gap: 15px;

	> div {
		gap: 15px;
		align-items: center;

		@media ${theme.breakpoints.mobile} {
			gap: 10px;
			align-items: initial;
		}
	}
`
);

export const PropertyDetailTitle = styled.h2(
	({ theme }) => `
	text-align: center;

	@media ${theme.breakpoints.mobile} {
		text-align: left;
	}
`
);

export const PropertyDetailText = styled.h1(
	({ theme }) => `
	text-align: center;
	color: ${theme.palette.primary.main}
`
);
