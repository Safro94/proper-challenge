import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import { PROPERTY_DETAIL } from '../../constants/routes';

import { IProperty } from '../../types';

import house from '../../assets/house.jpeg';

import {
	PropertyContainer,
	PropertyImage,
	PropertyImageContainer,
	PropertyInformation,
	PropertyItem,
	PropertyTenantContainer,
	PropertyTenantLabel,
	PropertyTenantText,
} from './index.styles';

interface IPropertyProps {
	item: IProperty;
	index: number;
	getItemProps: any;
}

const Property = ({ item, index, getItemProps }: IPropertyProps) => {
	const { t } = useTranslation('property');

	return (
		<PropertyItem {...getItemProps({ item, index })}>
			<Link to={PROPERTY_DETAIL.replace(':propertyId', `${item.id}`)}>
				<PropertyContainer>
					<PropertyImageContainer>
						<PropertyImage src={house} alt={`Property ${index}`} />
					</PropertyImageContainer>

					<PropertyInformation>
						<PropertyTenantContainer>
							<PropertyTenantLabel>{t('tenant')}:</PropertyTenantLabel>
							<PropertyTenantText>{item.tenantName}</PropertyTenantText>
						</PropertyTenantContainer>

						<PropertyTenantContainer>
							<PropertyTenantLabel>{t('rooms')}:</PropertyTenantLabel>
							<PropertyTenantText>{item.rooms}</PropertyTenantText>
						</PropertyTenantContainer>

						<PropertyTenantContainer>
							<PropertyTenantLabel>{t('size')}:</PropertyTenantLabel>
							<PropertyTenantText>{item.size}</PropertyTenantText>
						</PropertyTenantContainer>

						<PropertyTenantContainer>
							<PropertyTenantLabel>{t('address')}:</PropertyTenantLabel>
							<PropertyTenantText>{item.address}</PropertyTenantText>
						</PropertyTenantContainer>

						<PropertyTenantContainer>
							<PropertyTenantLabel>{t('utilities')}:</PropertyTenantLabel>
							<PropertyTenantText>{item.utilities}</PropertyTenantText>
						</PropertyTenantContainer>
					</PropertyInformation>
				</PropertyContainer>
			</Link>
		</PropertyItem>
	);
};

export default Property;
