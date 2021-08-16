import { useState, useEffect } from 'react';
import { useErrorHandler } from 'react-error-boundary';
import { useTranslation } from 'react-i18next';
import { useParams, useHistory } from 'react-router-dom';
import { StreetView } from 'react-google-map-street-view';

import Card from '../../components/card';
import PropertyInformation from '../../components/propertyInformation';
import Loading from '../../components/loading';
import Button from '../../components/button';

import { HOME } from '../../constants/routes';
import { PROPERTIES_ENDPOINT } from '../../constants/endpoints';

import fetcher from '../../utils/fetcher';

import {
	ButtonTypes,
	IProperty,
	RequestMethods,
	RequestStatus,
} from '../../types';

import house from '../../assets/house.jpeg';

import {
	PropertyDetailButtonContainer,
	PropertyDetailContainer,
	PropertyDetailContainerWrapper,
	PropertyDetailImage,
	PropertyDetailImageContainer,
	PropertyDetailInformationContainer,
	PropertyDetailText,
	PropertyDetailTitle,
} from './index.styles';

interface IParams {
	propertyId: string;
}

const DetailContainer = () => {
	const { t } = useTranslation('detailContainer');
	const { propertyId } = useParams<IParams>();
	const history = useHistory();
	const handleError = useErrorHandler();

	const [isLoading, setIsLoading] = useState<boolean>(true);
	const [property, setProperty] = useState<IProperty | undefined>();

	useEffect(() => {
		if (!property) {
			fetcher({
				url: `${process.env.REACT_APP_SERVER_URL}${PROPERTIES_ENDPOINT}/${propertyId}`,
			}).then(res => {
				setIsLoading(res.status === RequestStatus.Pending);
				setProperty(res.data);
			}, handleError);
		}
	}, [handleError, property, propertyId]);

	const handleDeleteProperty = (id: number) => {
		fetcher({
			url: `${process.env.REACT_APP_SERVER_URL}${PROPERTIES_ENDPOINT}/${id}`,
			method: RequestMethods.DELETE,
		}).then(() => {
			history.push(HOME);
		}, handleError);
	};

	if (isLoading) return <Loading />;

	return (
		<>
			{property ? (
				<Card>
					<PropertyDetailContainer>
						<PropertyDetailContainerWrapper>
							<PropertyDetailInformationContainer>
								<PropertyDetailTitle>{t('information')}</PropertyDetailTitle>
								<PropertyInformation property={property} />
							</PropertyDetailInformationContainer>

							<PropertyDetailImageContainer>
								<PropertyDetailImage src={house} alt={property.address} />
								{/* <StreetView
							address={property.address}
							APIkey={process.env.REACT_APP_GOOGLE_API_KEY}
							streetView
							zoomLevel={15}
						/> */}
							</PropertyDetailImageContainer>
						</PropertyDetailContainerWrapper>

						<PropertyDetailButtonContainer>
							<Button
								variant={ButtonTypes.Danger}
								onClick={() => handleDeleteProperty(property.id)}
							>
								{t('deleteProperty')}
							</Button>
						</PropertyDetailButtonContainer>
					</PropertyDetailContainer>
				</Card>
			) : (
				<PropertyDetailText>{t('noProperty')}</PropertyDetailText>
			)}
		</>
	);
};

export default DetailContainer;
