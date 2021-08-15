import { useEffect, useState } from 'react';
import { useErrorHandler } from 'react-error-boundary';
import { useTranslation } from 'react-i18next';
import { IoMdAddCircleOutline } from 'react-icons/io';

import Card from '../../components/card';
import AutoComplete from '../../components/autocomplete';
import Loading from '../../components/loading';

import { PROPERTIES_ENDPOINT } from '../../constants/endpoints';
import { NEW_PROPERTY } from '../../constants/routes';

import fetcher from '../../utils/fetcher';

import { IProperty, RequestStatus } from '../../types';

import {
	PropertyContainerLink,
	PropertyContainerLinkContainer,
	PropertyContainerText,
} from './index.styles';
import PropertyMenu from '../../components/propertyMenu';

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
			<PropertyContainerLinkContainer>
				<PropertyContainerLink to={NEW_PROPERTY}>
					<IoMdAddCircleOutline />
					{t('addProperty')}
				</PropertyContainerLink>
			</PropertyContainerLinkContainer>

			{!properties.length ? (
				<PropertyContainerText>{t('noProperties')}</PropertyContainerText>
			) : (
				<AutoComplete
					placeholder={t('autocompleteText')}
					items={properties}
					labelText={t('autocompleteText')}
					render={(
						getMenuProps: any,
						inputItems: IProperty[],
						getItemProps: any
					) => (
						<PropertyMenu
							getMenuProps={getMenuProps}
							inputItems={inputItems}
							getItemProps={getItemProps}
						/>
					)}
					filterProp='tenantName'
				/>
			)}
		</Card>
	);
};

export default PropertiesContainer;
