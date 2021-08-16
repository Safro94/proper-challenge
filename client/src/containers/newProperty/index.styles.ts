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

export const NewPropertyInputAddressContainer = styled.div`
	width: 100%;
	display: flex;
	gap: 5px;
`;

export const NewPropertyEditButtonContainer = styled.div`
	display: flex;
	align-items: flex-end;
`;

export const NewPropertyInputContainer = styled.div<{ disableInput?: boolean }>(
	({ disableInput }) => `
	width: 100%;
	border-radius: 6px;
	display: flex;
	gap: 5px;
	flex-direction: column;

	input { 
		${
			disableInput &&
			`
			opacity: 0.5;
			pointer-events: none;
		`
		}
	}
`
);
