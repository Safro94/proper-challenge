import { FaBars } from 'react-icons/fa';
import { ReactComponent as Logo } from '../../assets/logo.svg';

import {
	Avatar,
	AvatarContainer,
	HeaderContainer,
	HeaderWrapper,
	LogoContainer,
	MenuButtonContainer,
} from './index.styles';

interface IHeaderProps {
	isOpen: boolean;
	handleSidebar: (isOpen: boolean) => void;
}

const Header = ({ handleSidebar, isOpen }: IHeaderProps) => {
	return (
		<HeaderContainer>
			<HeaderWrapper>
				<MenuButtonContainer onClick={() => handleSidebar(!isOpen)}>
					<FaBars />
				</MenuButtonContainer>
				<LogoContainer>
					<Logo />
				</LogoContainer>
				<AvatarContainer>
					<Avatar
						src='https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'
						alt='Avatar'
					/>
				</AvatarContainer>
			</HeaderWrapper>
		</HeaderContainer>
	);
};

export default Header;
