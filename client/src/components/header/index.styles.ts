import styled from 'styled-components';

export const HeaderContainer = styled.div`
	width: 100%;
	height: 50px;
	background-color: ${({ theme }) => theme.palette.primary.main};
	position: sticky;
	top: 0;
	z-index: 999;
`;

export const HeaderWrapper = styled.div`
	height: 100%;
	padding: 0 20px;
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

export const LogoContainer = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
`;

export const AvatarContainer = styled.div`
	display: flex;
	align-items: center;
`;

export const Avatar = styled.img`
	width: 40px;
	height: 40px;
	border-radius: 50%;
	cursor: pointer;
`;
