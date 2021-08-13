import { useEffect, useState } from 'react';
import { useErrorHandler } from 'react-error-boundary';
import { useTranslation } from 'react-i18next';

import Card from '../../components/card';

import { PROPERTIES_ENDPOINT } from '../../constants/endpoints';

import fetcher from '../../utils/fetcher';

import { IProperty } from '../../types';

const PropertiesContainer = () => {
	const { t } = useTranslation('');
	const handleError = useErrorHandler();

	const [properties, setProperties] = useState<IProperty[]>([]);

	useEffect(() => {
		fetcher({
			url: PROPERTIES_ENDPOINT,
		}).then((res: IProperty[]) => {
			!res ? setProperties([]) : setProperties(res);
		}, handleError);
	}, [handleError]);

	return <Card>Text</Card>;
};

export default PropertiesContainer;
