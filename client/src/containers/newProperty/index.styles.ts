import styled from 'styled-components';

export const NewPropertyTitle = styled.h2(
	({ theme }) => `
	margin-bottom: 15px;
	text-align: center;

	@media ${theme.breakpoints.mobile} {
		text-align: left;
	}
`
);

export const NewPropertyInputContainer = styled.div`
	width: 100%;
	border-radius: 6px;
	display: flex;
	gap: 5px;
	flex-direction: column;
`;
