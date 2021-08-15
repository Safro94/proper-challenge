import { render, screen } from '../../../utils/test-utils';

import PropertyInformation from '..';

describe('PropertyInformation', () => {
	const property = {
		tenantName: 'Matias',
		rooms: 3,
		size: '40mt2',
		address: 'abc',
		utilities: 'def',
	};

	it('should render correctly', () => {
		const { container } = render(
			<PropertyInformation property={{ ...property, id: 1 }} />
		);
		expect(container.firstChild).toMatchSnapshot();
	});

	it('should render 5 items', () => {
		const texts = ['tenant', 'rooms', 'size', 'address', 'utilities'];

		render(<PropertyInformation property={{ ...property, id: 1 }} />);

		texts.forEach(text => {
			expect(screen.getByText(text)).toBeInTheDocument();
		});

		Object.values(property).forEach(item => {
			expect(screen.getByText(item)).toBeInTheDocument();
		});
	});
});
