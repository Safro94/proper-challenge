import { useTranslation } from 'react-i18next';
import { IProperty } from '../../types';

import {
	PropertyInformationContainer,
	PropertyTenantContainer,
	PropertyTenantLabel,
	PropertyTenantText,
} from './index.styles';

interface IPropertyInformationProps {
	property: IProperty;
}

const PropertyInformation = ({ property }: IPropertyInformationProps) => {
	const { t } = useTranslation('common');

	return (
		<PropertyInformationContainer>
			<PropertyTenantContainer>
				<PropertyTenantLabel>{t('tenant')}:</PropertyTenantLabel>
				<PropertyTenantText>{property.tenantName}</PropertyTenantText>
			</PropertyTenantContainer>

			<PropertyTenantContainer>
				<PropertyTenantLabel>{t('rooms')}:</PropertyTenantLabel>
				<PropertyTenantText>{property.rooms}</PropertyTenantText>
			</PropertyTenantContainer>

			<PropertyTenantContainer>
				<PropertyTenantLabel>{t('size')}:</PropertyTenantLabel>
				<PropertyTenantText>{property.size}</PropertyTenantText>
			</PropertyTenantContainer>

			<PropertyTenantContainer>
				<PropertyTenantLabel>{t('address')}:</PropertyTenantLabel>
				<PropertyTenantText>{property.address}</PropertyTenantText>
			</PropertyTenantContainer>

			<PropertyTenantContainer>
				<PropertyTenantLabel>{t('utilities')}:</PropertyTenantLabel>
				<PropertyTenantText>{property.utilities}</PropertyTenantText>
			</PropertyTenantContainer>
		</PropertyInformationContainer>
	);
};

export default PropertyInformation;
