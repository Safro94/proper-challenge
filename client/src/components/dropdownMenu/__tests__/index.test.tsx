import { render, screen } from '../../../utils/test-utils';

import DropdownMenu from '..';

describe('DropdownMenu', () => {
	const items = [
		{
			text: 'Matias',
			type: 'address',
		},
		{
			text: 'Charles',
			type: 'address',
		},
	];

	describe('DropdownMenu with items', () => {
		it('should render correctly', () => {
			const { container } = render(
				<DropdownMenu
					isOpen
					getMenuProps={() => {}}
					inputItems={items}
					getItemProps={() => {}}
				/>
			);
			expect(container.firstChild).toMatchSnapshot();
		});

		it('should render 2 items', () => {
			render(
				<DropdownMenu
					isOpen
					getMenuProps={() => {}}
					inputItems={items}
					getItemProps={() => {}}
				/>
			);

			expect(screen.getAllByTestId('list-item')).toHaveLength(2);
		});
	});

	describe('DropdownMenu without items', () => {
		it('should not render list items if inputItems is empty', () => {
			const { container } = render(
				<DropdownMenu
					isOpen
					getMenuProps={() => {}}
					inputItems={[]}
					getItemProps={() => {}}
				/>
			);

			expect(screen.queryAllByTestId('list-item')).toHaveLength(0);
			expect(container.firstChild).toMatchSnapshot();
		});

		it('should not render list items if isOpen is false', () => {
			const { container } = render(
				<DropdownMenu
					isOpen={false}
					getMenuProps={() => {}}
					inputItems={items}
					getItemProps={() => {}}
				/>
			);

			expect(screen.queryAllByTestId('list-item')).toHaveLength(0);
			expect(container.firstChild).toMatchSnapshot();
		});
	});
});
