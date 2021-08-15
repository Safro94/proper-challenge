import { useTranslation } from 'react-i18next';
import { useErrorHandler } from 'react-error-boundary';

import Button from '../button';
import PropertyInformation from '../propertyInformation';

import { HOME, PROPERTY_DETAIL } from '../../constants/routes';
import { PROPERTIES_ENDPOINT } from '../../constants/endpoints';

import { ButtonTypes, IProperty, RequestMethods } from '../../types';

import fetcher from '../../utils/fetcher';

import house from '../../assets/house.jpeg';

import {
	PropertyButtonsContainer,
	PropertyContainer,
	PropertyImage,
	PropertyImageContainer,
	PropertyItem,
	PropertyLink,
} from './index.styles';
import { useHistory } from 'react-router-dom';

interface IPropertyProps {
	item: IProperty;
	index: number;
	getItemProps: any;
}

const Property = ({ item, index, getItemProps }: IPropertyProps) => {
	const history = useHistory();
	const { t } = useTranslation('property');
	const handleError = useErrorHandler();

	const handleDeleteProperty = (id: number) => {
		console.log('entra');
		// fetcher({
		// 	url: `${process.env.REACT_APP_SERVER_URL}${PROPERTIES_ENDPOINT}/${id}`,
		// 	method: RequestMethods.DELETE,
		// }).then(() => {
		// 	console.log('sape');

		// 	history.push(HOME);
		// }, handleError);
	};

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

					<Button
						variant={ButtonTypes.Danger}
						onClick={() => handleDeleteProperty(item.id)}
					>
						{t('deleteProperty')}
					</Button>
				</PropertyButtonsContainer>
			</PropertyContainer>
		</PropertyItem>
	);
};

export default Property;
