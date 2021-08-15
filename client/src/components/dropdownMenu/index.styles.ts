import styled from 'styled-components';

export const DropdownMenuListContainer = styled.div`
	position: relative;
`;

export const DropdownMenuList = styled.ul(
	({ theme }) => `
	position: absolute;
	background-color: ${theme.palette.common.white};
	width: 100%;
	max-height: 20rem;
	overflow-y: auto;
	overflow-x: hidden;
	transition: opacity 0.1s ease;
	border-radius: 0 0 6px 6px;
	border: 1px solid ${theme.palette.primary.main};
	border-style: solid;
`
);

export const DropdownMenuListItem = styled.li(
	({ theme }) => `
	padding: 0.5rem;
	cursor: pointer;
	border-bottom: 1px solid ${theme.palette.primary.main};
	color: ${theme.palette.primary.main};
	font-size: 1rem;

	&:hover {
		background-color: ${theme.palette.primary.main};
		color: ${theme.palette.primary.text};
	}
`
);
