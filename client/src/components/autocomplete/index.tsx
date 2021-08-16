import { useState } from 'react';
import { useCombobox } from 'downshift';

import {
	AutoCompleteContainer,
	AutoCompleteInput,
	AutoCompleteInputContainer,
	AutoCompleteLabel,
	AutoCompleteWrapper,
} from './index.styles';

interface IAutoCompleteProps {
	items: any[];
	onInputChange?: (item: any) => void;
	onChange?: (item: any) => void;
	labelText: string;
	filterProp: string;
	render: any;
	placeholder: string;
	inputRef?: any;
}

const AutoComplete = ({
	items,
	labelText,
	filterProp,
	render,
	onInputChange = () => {},
	onChange = () => {},
	placeholder,
	inputRef,
}: IAutoCompleteProps) => {
	const [inputItems, setInputItems] = useState(items);
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
			if (state.selectedItem) onChange(state.selectedItem);

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
					<AutoCompleteInput
						{...getInputProps({
							onChange: onInputChange,
							placeholder,
							ref: inputRef,
						})}
						isActive={isOpen}
					/>
				</AutoCompleteInputContainer>
			</AutoCompleteWrapper>

			{render(getMenuProps, inputItems, getItemProps, isOpen)}
		</AutoCompleteContainer>
	);
};

export default AutoComplete;
