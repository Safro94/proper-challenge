import { render, screen } from '../../../utils/test-utils';

import Loading from '..';

jest.mock('react-spinners-css', () => ({
	Ring: ({ color }: { color: string }) => <div color={color}>Ring spinner</div>,
}));

describe('Loading', () => {
	it('should render correctly', () => {
		render(<Loading />);

		expect(screen.getByText(/ring spinner/i)).toBeInTheDocument();
		expect(screen.getByText(/ring spinner/i)).toHaveAttribute(
			'color',
			'#54bf7d'
		);
	});
});
