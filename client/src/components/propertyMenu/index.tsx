import { IProperty } from '../../types';
import Property from '../property';

import { PropertyMenuList } from './index.styles';

interface IPropertyMenuProps {
	getMenuProps: any;
	inputItems: IProperty[];
	getItemProps: any;
}

const PropertyMenu = ({
	getMenuProps,
	inputItems,
	getItemProps,
}: IPropertyMenuProps) => {
	return (
		<PropertyMenuList {...getMenuProps({}, { suppressRefError: true })}>
			{inputItems.map((item: IProperty, index: number) => (
				<Property
					key={item.id}
					item={item}
					index={index}
					getItemProps={getItemProps}
				/>
			))}
		</PropertyMenuList>
	);
};

export default PropertyMenu;
