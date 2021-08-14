import { useState } from 'react';
import { useCombobox } from 'downshift';

import Property from '../property';

import {
	AutoCompleteContainer,
	AutoCompleteInput,
	AutoCompleteInputContainer,
	AutoCompleteLabel,
	AutoCompleteList,
	AutoCompleteWrapper,
} from './index.styles';

interface IAutoCompleteProps {
	items: any[];
	onChange: (item: any) => void;
	labelText: string;
	filterProp: string;
}

const AutoComplete = ({
	items,
	onChange,
	labelText,
	filterProp,
}: IAutoCompleteProps) => {
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

		itemToString: item => (item ? item[filterProp] : ''),

		onInputValueChange: ({ inputValue }) => {
			const inputItem = items.filter(item => {
				return item[filterProp]
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
			<AutoCompleteWrapper>
				<AutoCompleteLabel {...getLabelProps()}>{labelText}</AutoCompleteLabel>

				<AutoCompleteInputContainer {...getComboboxProps()}>
					<AutoCompleteInput {...getInputProps()} isActive={isOpen} />
				</AutoCompleteInputContainer>
			</AutoCompleteWrapper>

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
