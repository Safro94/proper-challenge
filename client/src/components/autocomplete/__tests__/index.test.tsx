import { render, screen } from '../../../utils/test-utils';

import Autocomplete from '..';
import { IAddress } from '../../../types';
import userEvent from '@testing-library/user-event';

describe('Autocomplete', () => {
	const items = [{ text: 'Matias' }, { text: 'Martin' }, { text: 'Charles' }];
	const labelText = 'text';
	const filterProp = 'text';
	const onInputChange = () => {};
	const onChange = () => {};
	const placeholder = 'input';

	const Component = () => (
		<Autocomplete
			items={items}
			labelText={labelText}
			filterProp={filterProp}
			onInputChange={onInputChange}
			render={(getMenuProps: any, inputItems: IAddress[]) => (
				<div {...getMenuProps()}>
					<ul>
						{inputItems.map((item: IAddress) => (
							<li key={item.text} data-testid='option'>
								{item.text}
							</li>
						))}
					</ul>
				</div>
			)}
			placeholder={placeholder}
			onChange={onChange}
		/>
	);

	it('should render correctly', () => {
		const { container } = render(<Component />);
		expect(container.firstChild).toMatchSnapshot();
	});

	describe('Autocomplete functionality', () => {
		beforeEach(() => {
			render(<Component />);
		});

		it('should filter the options while the user types', () => {
			const input = screen.getByPlaceholderText(/input/i);

			expect(screen.getByText(/text/i)).toBeInTheDocument();
			expect(input).toBeInTheDocument();

			expect(screen.getAllByTestId('option')).toHaveLength(3);

			userEvent.type(input, 'Ma');
			expect(screen.getAllByTestId('option')).toHaveLength(2);

			userEvent.type(input, 't');
			expect(screen.getAllByTestId('option')).toHaveLength(1);
		});
	});
});
