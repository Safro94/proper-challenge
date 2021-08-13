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

interface ISidebarProps {
	isOpen: boolean;
	handleSidebar: (isOpen: boolean) => void;
}

const Sidebar = ({ handleSidebar, isOpen }: ISidebarProps) => {
	return (
		<SidebarContainer isOpen={isOpen}>
			<SidebarWrapper>
				<CloseButtonContainer onClick={() => handleSidebar(!isOpen)}>
					<FaWindowClose />
				</CloseButtonContainer>

				<Menu title='Dashboard'>
					<Link to={HOME}>
						<SidebarListItem active>
							<FaHome />
							Home
						</SidebarListItem>
					</Link>

					<SidebarListItem>
						<FaMoneyBillAlt />
						Payments
					</SidebarListItem>

					<SidebarListItem>
						<IoAnalyticsOutline />
						Sales
					</SidebarListItem>
				</Menu>

				<Menu title='Notifications'>
					<Link to={HOME}>
						<SidebarListItem>
							<FaMailBulk />
							Mail
						</SidebarListItem>
					</Link>

					<SidebarListItem>
						<BiMessageSquareDetail />
						Messages
					</SidebarListItem>
				</Menu>

				<Menu title='Account'>
					<SidebarListItem>
						<BsFillGearFill />
						Settings
					</SidebarListItem>
				</Menu>
			</SidebarWrapper>
		</SidebarContainer>
	);
};

export default Sidebar;
