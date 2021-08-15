import styled from 'styled-components';

export const AutoCompleteContainer = styled.div`
	display: flex;
	flex-direction: column;
`;

export const AutoCompleteInputContainer = styled.div`
	display: inline-block;
	width: 100%;
`;

export const AutoCompleteWrapper = styled.div`
	display: flex;
	gap: 10px;
	flex-direction: column;
`;

export const AutoCompleteInput = styled.input`
	width: 100%;
	padding: 10px;
	font-size: 1em;
	border: 1px solid black;
	border-radius: 6px;
`;

export const AutoCompleteLabel = styled.label(
	({ theme }) => `
	font-weight: bold;
	text-align: center;

	@media ${theme.breakpoints.mobile} {
		text-align: left;
	}
`
);
