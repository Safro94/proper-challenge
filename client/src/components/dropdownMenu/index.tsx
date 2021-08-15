import { IAddress } from '../../types';
import {
	DropdownMenuList,
	DropdownMenuListContainer,
	DropdownMenuListItem,
} from './index.styles';

interface IDropdownMenuProps {
	getMenuProps: any;
	inputItems: IAddress[];
	getItemProps: any;
	isOpen: boolean;
}

const DropdownMenu = ({
	getMenuProps,
	inputItems,
	getItemProps,
	isOpen,
}: IDropdownMenuProps) => {
	return (
		<>
			{inputItems.length > 0 && isOpen && (
				<DropdownMenuListContainer>
					<DropdownMenuList {...getMenuProps({}, { suppressRefError: true })}>
						{inputItems.map((item: IAddress, index: number) => (
							<DropdownMenuListItem
								data-testid='list-item'
								key={item.text}
								{...getItemProps({ key: index, index, item })}
							>
								{item.text}
							</DropdownMenuListItem>
						))}
					</DropdownMenuList>
				</DropdownMenuListContainer>
			)}
		</>
	);
};

export default DropdownMenu;
