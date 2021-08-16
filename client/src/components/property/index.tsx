import { useTranslation } from 'react-i18next';

import PropertyInformation from '../propertyInformation';

import { PROPERTY_DETAIL } from '../../constants/routes';

import { IProperty } from '../../types';

import house from '../../assets/house.jpeg';

import {
	PropertyButtonsContainer,
	PropertyContainer,
	PropertyImage,
	PropertyImageContainer,
	PropertyItem,
	PropertyLink,
} from './index.styles';

interface IPropertyProps {
	item: IProperty;
	index: number;
	getItemProps: any;
}

const Property = ({ item, index, getItemProps }: IPropertyProps) => {
	const { t } = useTranslation('property');

	return (
		<PropertyItem {...getItemProps({ key: index, index, item })}>
			<PropertyContainer>
				<PropertyImageContainer>
					<PropertyImage src={house} alt={`Property ${index}`} />
				</PropertyImageContainer>

				<PropertyInformation property={item} />

				<PropertyButtonsContainer>
					<PropertyLink
						to={PROPERTY_DETAIL.replace(':propertyId', `${item.id}`)}
					>
						{t('viewMore')}
					</PropertyLink>
				</PropertyButtonsContainer>
			</PropertyContainer>
		</PropertyItem>
	);
};

export default Property;
