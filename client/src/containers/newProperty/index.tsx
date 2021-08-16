import React from 'react';
import { useState } from 'react';
import { useErrorHandler } from 'react-error-boundary';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom';

import AutoComplete from '../../components/autocomplete';
import Button from '../../components/button';
import Card from '../../components/card';
import DropdownMenu from '../../components/dropdownMenu';
import Form from '../../components/form';

import { PROPERTIES_ENDPOINT } from '../../constants/endpoints';
import { HOME } from '../../constants/routes';

import { RequestMethods, IAddress } from '../../types';

import fetcher from '../../utils/fetcher';

import { mapDawaResponse } from '../../utils/mapper';

import {
	NewPropertyEditButtonContainer,
	NewPropertyInputAddressContainer,
	NewPropertyInputContainer,
	NewPropertyTitle,
} from './index.styles';

const NewPropertyContainer = () => {
	const history = useHistory();
	const { t } = useTranslation(['common', 'newPropertyContainer']);
	const handleError = useErrorHandler();

	const [isAddressEditable, setIsAddressEditable] = useState(true);
	const [address, setAddress] = useState('');
	const [suggestions, setSuggestions] = useState<IAddress[]>([]);
	const [rooms, setRooms] = useState(1);
	const [size, setSize] = useState('');
	const [tenantName, setTenantName] = useState('');
	const [utilities, setUtilities] = useState('');

	const isInvalid =
		address.trim() === '' ||
		size.trim() === '' ||
		rooms < 1 ||
		tenantName.trim() === '' ||
		utilities.trim() === '' ||
		isAddressEditable;

	const handleAddressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const inputValue = e.target.value;
		if (!inputValue) return;

		setAddress(inputValue);

		fetcher({
			url: `${process.env.REACT_APP_DAWA_API_ENDPOINT}${inputValue}&caretpos=18&fuzzy=`,
		}).then(({ data }) => {
			if (!data) return;

			const addresses = mapDawaResponse(data);
			setSuggestions(addresses);
		}, handleError);
	};

	const onSelectedItem = ({ text }: { text: string }) => {
		setAddress(text);
		setIsAddressEditable(false);
	};

	const onSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
		e.preventDefault();

		fetcher({
			url: `${process.env.REACT_APP_SERVER_URL}${PROPERTIES_ENDPOINT}`,
			method: RequestMethods.POST,
			body: {
				address,
				rooms,
				size,
				tenantName,
				utilities,
			},
		}).then(() => {
			history.push(HOME);
		}, handleError);
	};

	const handleEditButton = () => {
		setIsAddressEditable(true);
	};

	return (
		<Card>
			<NewPropertyTitle>
				{t('newPropertyContainer:newPropertyTitle')}
			</NewPropertyTitle>
			<Form>
				<NewPropertyInputAddressContainer>
					<NewPropertyInputContainer disableInput={!isAddressEditable}>
						<AutoComplete
							placeholder={`${t('newPropertyContainer:enter')} ${t('address')}`}
							items={suggestions}
							onInputChange={handleAddressChange}
							onChange={onSelectedItem}
							labelText={t('address')}
							filterProp='text'
							render={(
								getMenuProps: any,
								inputItems: IAddress[],
								getItemProps: any,
								isOpen: boolean
							) => (
								<DropdownMenu
									getMenuProps={getMenuProps}
									inputItems={inputItems}
									getItemProps={getItemProps}
									isOpen={isOpen}
								/>
							)}
						/>
					</NewPropertyInputContainer>

					<NewPropertyEditButtonContainer>
						<Button onClick={handleEditButton} disabled={isAddressEditable}>
							{t('edit')}
						</Button>
					</NewPropertyEditButtonContainer>
				</NewPropertyInputAddressContainer>

				<NewPropertyInputContainer>
					<Form.Label>{t('tenant')}</Form.Label>

					<Form.Input
						placeholder={`${t('newPropertyContainer:enter')} ${t('tenant')}`}
						onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
							setTenantName(e.target.value)
						}
						value={tenantName}
					/>
				</NewPropertyInputContainer>

				<NewPropertyInputContainer>
					<Form.Label>{t('rooms')}</Form.Label>

					<Form.Input
						type='number'
						placeholder={`${t('newPropertyContainer:enter')} ${t('rooms')}`}
						onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
							setRooms(parseInt(e.target.value))
						}
						value={rooms}
					/>
				</NewPropertyInputContainer>

				<NewPropertyInputContainer>
					<Form.Label>{t('size')}</Form.Label>

					<Form.Input
						placeholder={`${t('newPropertyContainer:enter')} ${t('size')}`}
						onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
							setSize(e.target.value)
						}
						value={size}
					/>
				</NewPropertyInputContainer>

				<NewPropertyInputContainer>
					<Form.Label>{t('utilities')}</Form.Label>

					<Form.Input
						placeholder={`${t('newPropertyContainer:enter')} ${t('utilities')}`}
						onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
							setUtilities(e.target.value)
						}
						value={utilities}
					/>
				</NewPropertyInputContainer>

				<Form.Submit onClick={onSubmit} disabled={isInvalid}>
					{t('add')}
				</Form.Submit>
			</Form>
		</Card>
	);
};

export default NewPropertyContainer;
