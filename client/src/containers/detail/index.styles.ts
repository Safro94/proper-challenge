import styled from 'styled-components';

export const PropertyDetailContainerWrapper = styled.div(
	({ theme }) => `
	display: grid;
	gap: 15px;
	
	@media ${theme.breakpoints.mobile} {
		grid-template-columns: repeat(2, 1fr);
	}
`
);

export const PropertyDetailContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 15px;
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

export const PropertyDetailImageContainer = styled.div`
	height: fit-content;
`;

export const PropertyDetailImage = styled.img`
	height: 100%;
	width: auto;
`;

export const PropertyDetailButtonContainer = styled.div`
	display: flex;
	justify-content: center;
`;
