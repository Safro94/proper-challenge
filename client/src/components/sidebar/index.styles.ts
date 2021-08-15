import styled from 'styled-components';

interface ISidebarContainerProps {
	isOpen: boolean;
}

interface ISidebarListItemProps {
	active?: boolean;
}

export const SidebarContainer = styled.div<ISidebarContainerProps>(
	({ theme, isOpen }) => `
	position: fixed;
	z-index: 999;
	width: 200px;
	height: 100%;
	transition: all 0.5s ease 0s;
	background-color: ${theme.palette.primary.main};
	transform: ${!isOpen ? 'translate3d(-100%, 0px, 0px)' : ''};

	@media ${theme.breakpoints.tablet} {
    height: calc(100vh - 50px);
    position: relative;
    transform: initial;
  }
`
);

export const CloseButtonContainer = styled.div(
	({ theme }) => `
	display: flex;
	justify-content: flex-end;
	cursor: pointer;

	@media ${theme.breakpoints.tablet} {
		display: none;
	}
`
);

export const SidebarWrapper = styled.div(
	({ theme }) => `
	padding: 20px;
	color: ${theme.palette.primary.text};
	display: flex;
	flex-direction: column;
	gap: 20px;
`
);

export const SidebarListItem = styled.li<ISidebarListItemProps>(
	({ theme, active }) => `
	padding: 5px 10px;
  font-size: 1.3em;
	font-weight: bold;
	cursor: pointer;
	display: flex;
	align-items: center;
	border-radius: 6px;
	gap: 5px;
  background-color: ${active ? theme.palette.common.white : ''};
  color: ${active ? theme.palette.primary.main : ''};

	&:hover {
		background-color: ${theme.palette.common.white};
		color: ${theme.palette.primary.main};
	}
`
);
