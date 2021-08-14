import { useTranslation } from 'react-i18next';

import { PROPERTY_DETAIL } from '../../constants/routes';

import { ButtonTypes, IProperty } from '../../types';

import house from '../../assets/house.jpeg';

import {
	PropertyContainer,
	PropertyImage,
	PropertyImageContainer,
	PropertyInformation,
	PropertyItem,
	PropertyLink,
	PropertyTenantContainer,
	PropertyTenantLabel,
	PropertyTenantText,
} from './index.styles';
import Button from '../button';

interface IPropertyProps {
	item: IProperty;
	index: number;
	getItemProps: any;
}

const Property = ({ item, index, getItemProps }: IPropertyProps) => {
	const { t } = useTranslation('property');

	return (
		<PropertyItem {...getItemProps({ item, index })}>
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

				<PropertyLink to={PROPERTY_DETAIL.replace(':propertyId', `${item.id}`)}>
					{t('viewMore')}
				</PropertyLink>

				<Button
					variant={ButtonTypes.Danger}
					text={t('deleteProperty')}
					onClick={() => {}}
				/>
			</PropertyContainer>
		</PropertyItem>
	);
};

export default Property;
