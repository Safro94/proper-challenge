import styled from 'styled-components';

export const PropertyInformationContainer = styled.div(
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
