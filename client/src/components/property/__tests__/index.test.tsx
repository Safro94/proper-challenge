import { render, screen } from '../../../utils/test-utils';

import Property from '..';

import { PROPERTY_DETAIL } from '../../../constants/routes';

describe('Property', () => {
	const index = 1;
	const getItemProps = () => {};
	const property = {
		id: 1,
		tenantName: 'Matias',
		rooms: 3,
		size: '40mt2',
		address: 'abc',
		utilities: 'def',
	};

	it('should render correctly', () => {
		const { container } = render(
			<Property item={property} index={index} getItemProps={getItemProps} />
		);
		expect(container.firstChild).toMatchSnapshot();
	});

	describe('Property functionality', () => {
		beforeEach(() => {
			render(
				<Property item={property} index={index} getItemProps={getItemProps} />
			);
		});

		it('should have a link with the correct url', () => {
			expect(screen.getByRole('link')).toBeInTheDocument();
			expect((screen.getByRole('link') as HTMLLinkElement).href).toBe(
				`http://localhost${PROPERTY_DETAIL.replace(
					':propertyId',
					`${property.id}`
				)}`
			);
		});
	});
});
