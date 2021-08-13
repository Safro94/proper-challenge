import { List, MenuContainer, Title } from './index.styles';

interface IMenuProps {
	title: string;
	children: React.ReactNode;
}

const Menu = ({ title, children }: IMenuProps) => {
	return (
		<MenuContainer>
			<Title>{title}</Title>
			<List>{children}</List>
		</MenuContainer>
	);
};

export default Menu;
