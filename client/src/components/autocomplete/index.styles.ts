import styled from 'styled-components';

export const AutoCompleteContainer = styled.div`
	display: flex;
	flex-direction: column;
`;

export const AutoCompleteInputContainer = styled.div(
	({ theme }) => `
	display: inline-block;
	flex: 1;

	@media ${theme.breakpoints.mobile} {
		flex: 2;
	}
`
);

export const AutoCompleteWrapper = styled.div(
	({ theme }) => `
	display: flex;
	align-items: center;
	gap: 10px;
	flex-direction: column;
	
	@media ${theme.breakpoints.mobile} {
		flex-direction: row;
	}
`
);

export const AutoCompleteInput = styled.input`
	width: 100%;
	padding: 10px;
	font-size: 1em;
	border: 1px solid black;
	border-radius: 6px;
`;

export const AutoCompleteLabel = styled.label`
	font-size: 1.3em;
	font-weight: bold;
	text-align: center;
	flex: 1;
`;

export const AutoCompleteList = styled.ul`
	width: 100%;
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
	gap: 15px;
	margin: 15px 0;
`;
