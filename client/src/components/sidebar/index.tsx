import { Link } from 'react-router-dom';

import Menu from './menu';

import { HOME } from '../../constants/routes';

import {
	FaHome,
	FaMailBulk,
	FaMoneyBillAlt,
	FaWindowClose,
} from 'react-icons/fa';
import { BsFillGearFill } from 'react-icons/bs';
import { IoAnalyticsOutline } from 'react-icons/io5';
import { BiMessageSquareDetail } from 'react-icons/bi';

import {
	CloseButtonContainer,
	SidebarContainer,
	SidebarListItem,
	SidebarWrapper,
} from './index.styles';
import { useTranslation } from 'react-i18next';

interface ISidebarProps {
	isOpen: boolean;
	handleSidebar: (isOpen: boolean) => void;
}

const Sidebar = ({ handleSidebar, isOpen }: ISidebarProps) => {
	const { t } = useTranslation('sidebar');

	return (
		<SidebarContainer isOpen={isOpen}>
			<SidebarWrapper>
				<CloseButtonContainer
					data-testid='close-button'
					onClick={() => handleSidebar(!isOpen)}
				>
					<FaWindowClose />
				</CloseButtonContainer>

				<Menu title={t('dashboard')}>
					<Link to={HOME}>
						<SidebarListItem active>
							<FaHome />
							{t('home')}
						</SidebarListItem>
					</Link>

					<SidebarListItem>
						<FaMoneyBillAlt />
						{t('payments')}
					</SidebarListItem>

					<SidebarListItem>
						<IoAnalyticsOutline />
						{t('sales')}
					</SidebarListItem>
				</Menu>

				<Menu title={t('notifications')}>
					<SidebarListItem>
						<FaMailBulk />
						{t('mail')}
					</SidebarListItem>

					<SidebarListItem>
						<BiMessageSquareDetail />
						{t('messages')}
					</SidebarListItem>
				</Menu>

				<Menu title={t('account')}>
					<SidebarListItem>
						<BsFillGearFill />
						{t('settings')}
					</SidebarListItem>
				</Menu>
			</SidebarWrapper>
		</SidebarContainer>
	);
};

export default Sidebar;
