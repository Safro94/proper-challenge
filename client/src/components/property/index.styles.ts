import styled from 'styled-components';

export const PropertyItem = styled.li(
	({ theme }) => `
	padding: 20px;
	border: 1px solid ${theme.palette.primary.main};
	border-radius: 6px;
	transition: 0.3s ease-in-out;

	&:hover {
		background-color: ${theme.palette.primary.main};
		color: ${theme.palette.primary.text};
	}
`
);

export const PropertyContainer = styled.div(
	({ theme }) => `
	display: grid;
	gap: 15px;
	align-items: center;
	cursor: pointer;

	@media ${theme.breakpoints.mobile} {
		grid-template-columns: 1fr 1fr;
	}
`
);

export const PropertyInformation = styled.div(
	({ theme }) => `
	display: flex;
	flex-direction: column;
	gap: 5px;
	color: ${theme.palette.common.black}
`
);

export const PropertyTenantContainer = styled.div`
	display: flex;
	gap: 3px;
	flex-wrap: wrap;
	align-items: center;
`;

export const PropertyTenantLabel = styled.h4``;
export const PropertyTenantText = styled.h5`
	font-weight: normal;
`;

export const PropertyImageContainer = styled.div`
	height: 110px;
`;

export const PropertyImage = styled.img`
	height: 100%;
	width: auto;
`;
