import styled from 'styled-components';

interface IAutoCompleteInputProps {
	isActive: boolean;
}

export const AutoCompleteContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

export const AutoCompleteInputContainer = styled.div`
	display: inline-block;
`;

export const AutoCompleteInput = styled.input<IAutoCompleteInputProps>(
	({ isActive }) => `
  width: 100%;
	padding: 10px;
	font-size: 1em;
  border: 1px solid black;
  display: ${isActive ? 'block' : 'none'}
  border-bottom-left-radius: ${isActive && 0};
  border-bottom-right-radius: ${isActive && 0};
  border-radius: 3px;
`
);

export const AutoCompleteLabel = styled.label`
	font-size: 1.3em;
	font-weight: bold;
	text-align: center;
`;

export const AutoCompleteList = styled.ul`
	width: 100%;
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
	gap: 15px;
	margin: 15px 0;
`;
