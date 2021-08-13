import styled from 'styled-components';

export const AppContainer = styled.div(
	({ theme }) => `
	@media ${theme.breakpoints.tablet} {
		display: grid;
		grid-template-columns: 200px 1fr;
	}
`
);

export const MainContainer = styled.div`
	padding: 20px;
`;
