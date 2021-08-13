import { useEffect, useState } from 'react';
import { useErrorHandler } from 'react-error-boundary';
import { useTranslation } from 'react-i18next';

import Card from '../../components/card';

import { PROPERTIES_ENDPOINT } from '../../constants/endpoints';

import fetcher from '../../utils/fetcher';

import { IProperty } from '../../types';
import AutoComplete from '../../components/autocomplete';

const PropertiesContainer = () => {
	const items = [
		{
			id: 1,
			address: 'korte leidsedwarsstraat 70',
			size: '36mt2',
			rooms: 3,
			utilities: 'abc',
			tenantName: 'Matias',
		},
		{
			id: 2,
			address: 'korte leidsedwarsstraat 30',
			size: '36mt2',
			rooms: 3,
			utilities: 'abc',
			tenantName: 'Martin',
		},
		{
			id: 2,
			address: 'korte leidsedwarsstraat 30',
			size: '36mt2',
			rooms: 3,
			utilities: 'abc',
			tenantName: 'Martin',
		},
		{
			id: 2,
			address: 'korte leidsedwarsstraat 30',
			size: '36mt2',
			rooms: 3,
			utilities: 'abc',
			tenantName: 'Martin',
		},
	];
	const { t } = useTranslation('propertiesContainer');
	const handleError = useErrorHandler();

	const [properties, setProperties] = useState<IProperty[]>([]);

	useEffect(() => {
		fetcher({
			url: PROPERTIES_ENDPOINT,
		}).then((res: IProperty[]) => {
			setProperties(res ?? []);
		}, handleError);
	}, [handleError]);

	return (
		<Card>
			<AutoComplete
				items={items}
				onChange={() => {}}
				labelText={t('autocompleteText')}
			/>
			{properties.map(item => 'hola')}
		</Card>
	);
};

export default PropertiesContainer;
