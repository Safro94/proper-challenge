import { useEffect, useState } from 'react';
import { useErrorHandler } from 'react-error-boundary';
import { useTranslation } from 'react-i18next';

import Card from '../../components/card';
import AutoComplete from '../../components/autocomplete';
import Loading from '../../components/loading';

import { PROPERTIES_ENDPOINT } from '../../constants/endpoints';

import fetcher from '../../utils/fetcher';

import { IProperty, RequestStatus } from '../../types';

import { PropertyContainerText } from './index.styles';

const PropertiesContainer = () => {
	const { t } = useTranslation('propertiesContainer');
	const handleError = useErrorHandler();

	const [properties, setProperties] = useState<IProperty[]>([]);
	const [isLoading, setIsLoading] = useState<boolean>(true);

	useEffect(() => {
		fetcher({
			url: `${process.env.REACT_APP_SERVER_URL}${PROPERTIES_ENDPOINT}`,
		}).then(res => {
			setIsLoading(res.status === RequestStatus.Pending);
			setProperties(res.data);
		}, handleError);
	}, [handleError]);

	if (isLoading) return <Loading />;

	return (
		<Card>
			{!properties.length ? (
				<PropertyContainerText>{t('noProperties')}</PropertyContainerText>
			) : (
				<AutoComplete
					items={properties}
					// items={properties}
					onChange={() => {}}
					labelText={t('autocompleteText')}
					filterProp='tenantName'
				/>
			)}
		</Card>
	);
};

export default PropertiesContainer;
