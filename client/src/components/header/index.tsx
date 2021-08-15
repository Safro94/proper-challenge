import { useTranslation } from 'react-i18next';
import { FaBars } from 'react-icons/fa';

import { ReactComponent as Logo } from '../../assets/logo.svg';
import { HOME } from '../../constants/routes';
import LanguageToogle from '../languageToogle';

import {
	HeaderAvatar,
	HeaderAvatarContainer,
	HeaderContainer,
	HeaderLogoContainer,
	HeaderLogoContainerLink,
	HeaderMenuButtonContainer,
	HeaderMenuContainer,
	HeaderWelcomeText,
	HeaderWrapper,
} from './index.styles';

interface IHeaderProps {
	isOpen: boolean;
	handleSidebar: (isOpen: boolean) => void;
}

const Header = ({ handleSidebar, isOpen }: IHeaderProps) => {
	const { t } = useTranslation('common');
	const user = 'Matias';

	return (
		<HeaderContainer>
			<HeaderWrapper>
				<HeaderMenuContainer>
					<HeaderMenuButtonContainer
						data-testid='menu'
						onClick={() => handleSidebar(!isOpen)}
					>
						<FaBars data-testid='icon' />
					</HeaderMenuButtonContainer>

					<HeaderLogoContainer>
						<HeaderLogoContainerLink to={HOME}>
							<Logo />
						</HeaderLogoContainerLink>
					</HeaderLogoContainer>
				</HeaderMenuContainer>

				<HeaderAvatarContainer>
					<HeaderWelcomeText>
						{t('welcome')} {user}
					</HeaderWelcomeText>
					<HeaderAvatar
						src='https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'
						alt='Avatar'
					/>
					<LanguageToogle />
				</HeaderAvatarContainer>
			</HeaderWrapper>
		</HeaderContainer>
	);
};

export default Header;
