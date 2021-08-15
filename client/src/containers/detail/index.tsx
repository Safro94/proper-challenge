import { useState, useEffect } from 'react';
import { useErrorHandler } from 'react-error-boundary';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { StreetView } from 'react-google-map-street-view';

import Card from '../../components/card';
import PropertyInformation from '../../components/propertyInformation';

import { PROPERTIES_ENDPOINT } from '../../constants/endpoints';

import fetcher from '../../utils/fetcher';

import { IProperty } from '../../types';

import {
	PropertyDetailContainer,
	PropertyDetailInformationContainer,
	PropertyDetailTitle,
} from './index.styles';

interface IDetailContainerProps {
	property?: IProperty;
}

interface IParams {
	propertyId: string;
}

const DetailContainer = ({
	property: receivedProperty,
}: IDetailContainerProps) => {
	const { t } = useTranslation('detailContainer');
	const { propertyId } = useParams<IParams>();
	const handleError = useErrorHandler();

	const [property, setProperty] = useState<IProperty | undefined>(
		receivedProperty
	);

	useEffect(() => {
		if (!property) {
			fetcher({
				url: `${process.env.REACT_APP_SERVER_URL}${PROPERTIES_ENDPOINT}/${propertyId}`,
			}).then(res => {
				setProperty(res.data);
			}, handleError);
		}
	}, [handleError, property, propertyId]);

	return (
		<>
			{property && (
				<Card>
					<PropertyDetailContainer>
						<PropertyDetailInformationContainer>
							<PropertyDetailTitle>{t('information')}</PropertyDetailTitle>
							<PropertyInformation property={property} />
						</PropertyDetailInformationContainer>

						{/* <StreetView
							address={property.address}
							APIkey={process.env.REACT_APP_GOOGLE_API_KEY}
							streetView
							zoomLevel={15}
						/> */}
					</PropertyDetailContainer>
				</Card>
			)}
		</>
	);
};

export default DetailContainer;
