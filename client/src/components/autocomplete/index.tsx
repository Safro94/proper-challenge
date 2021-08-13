import { useState } from 'react';
import { useCombobox } from 'downshift';

import { IProperty } from '../../types';

import Property from '../property';

import {
	AutoCompleteContainer,
	AutoCompleteInput,
	AutoCompleteInputContainer,
	AutoCompleteLabel,
	AutoCompleteList,
} from './index.styles';

interface IAutoCompleteProps {
	items: IProperty[];
	onChange: (item: any) => void;
	labelText: string;
}

const AutoComplete = ({ items, onChange, labelText }: IAutoCompleteProps) => {
	const [inputItems, setInputItems] = useState<any[]>(items);
	const {
		isOpen,
		getLabelProps,
		getMenuProps,
		getInputProps,
		getComboboxProps,
		getItemProps,
	} = useCombobox({
		items: inputItems,

		itemToString: item => (item ? item.tenantName : ''),

		onInputValueChange: ({ inputValue }) => {
			const inputItem = items.filter(item => {
				return item.tenantName
					.toLowerCase()
					.startsWith(inputValue?.toLowerCase() ?? '');
			});

			setInputItems(inputItem);
		},

		onStateChange: state => {
			if (state.inputValue) onChange(state.selectedItem);

			if (!state.isOpen) {
				return {
					...state,
					selectedItem: '',
				};
			}
		},
	});

	return (
		<AutoCompleteContainer>
			<AutoCompleteLabel {...getLabelProps()}>{labelText}</AutoCompleteLabel>

			<AutoCompleteInputContainer {...getComboboxProps()}>
				<AutoCompleteInput {...getInputProps()} isActive={isOpen} />
			</AutoCompleteInputContainer>

			<AutoCompleteList {...getMenuProps()}>
				{inputItems.map((item, index) => (
					<Property
						key={item.id}
						item={item}
						index={index}
						getItemProps={getItemProps}
					/>
				))}
			</AutoCompleteList>
		</AutoCompleteContainer>
	);
};

export default AutoComplete;
