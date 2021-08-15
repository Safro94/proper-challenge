import { render, screen } from '../../../utils/test-utils';

import PropertyMenu from '..';

jest.mock('../../property', () => () => <div>Property</div>);

describe('PropertyMenu', () => {
	const properties = [
		{
			id: 1,
			tenantName: 'Matias',
			rooms: 3,
			size: '40mt2',
			address: 'abc',
			utilities: 'def',
		},
		{
			id: 2,
			tenantName: 'Martin',
			rooms: 2,
			size: '40mt2',
			address: 'def',
			utilities: 'abc',
		},
	];

	it('should render correctly', () => {
		const { container } = render(
			<PropertyMenu
				getMenuProps={() => {}}
				inputItems={properties}
				getItemProps={() => {}}
			/>
		);
		expect(container.firstChild).toMatchSnapshot();
	});

	it('should render 2 properties', () => {
		render(
			<PropertyMenu
				getMenuProps={() => {}}
				inputItems={properties}
				getItemProps={() => {}}
			/>
		);

		expect(screen.getAllByText(/Property/i)).toHaveLength(2);
	});
});
