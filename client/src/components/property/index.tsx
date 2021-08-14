import { useTranslation } from 'react-i18next';
import { useErrorHandler } from 'react-error-boundary';

import Button from '../button';

import { PROPERTY_DETAIL } from '../../constants/routes';
import { PROPERTIES_ENDPOINT } from '../../constants/endpoints';

import { ButtonTypes, IProperty, RequestMethods } from '../../types';

import fetcher from '../../utils/fetcher';

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

interface IPropertyProps {
	item: IProperty;
	index: number;
	getItemProps: any;
}

const Property = ({ item, index, getItemProps }: IPropertyProps) => {
	const { t } = useTranslation('property');
	const handleError = useErrorHandler();

	const handleDeleteProperty = (id: number) => {
		fetcher({
			url: `${process.env.REACT_APP_SERVER_URL}${PROPERTIES_ENDPOINT}/${id}`,
			method: RequestMethods.DELETE,
		}).catch(handleError);
	};

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
					onClick={() => handleDeleteProperty(item.id)}
				/>
			</PropertyContainer>
		</PropertyItem>
	);
};

export default Property;
