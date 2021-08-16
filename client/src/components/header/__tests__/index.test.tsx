import { render, screen } from '../../../utils/test-utils';

import Header from '..';
import userEvent from '@testing-library/user-event';

describe('Header', () => {
	const handleSidebar = jest.fn();
	const isOpen = false;

	beforeEach(() => {
		render(<Header handleSidebar={handleSidebar} isOpen={isOpen} />);
	});

	it('should match the snapshot', () => {
		const { container } = render(
			<Header handleSidebar={handleSidebar} isOpen={isOpen} />
		);
		expect(container.firstChild).toMatchSnapshot();
	});

	it('should render correctly', () => {
		expect(screen.getByTestId('icon')).toBeInTheDocument();
		expect(screen.getByRole('link')).toBeInTheDocument();
		expect((screen.getByRole('link') as HTMLLinkElement).href).toBe(
			'http://localhost/'
		);
		expect(screen.getByText(/welcome matias/i)).toBeInTheDocument();
		expect(screen.getByAltText(/avatar/i)).toBeInTheDocument();
	});

	it('should call handleSidebar when the menu is clicked', () => {
		expect(handleSidebar).not.toHaveBeenCalled();
		userEvent.click(screen.getByTestId('menu'));

		expect(handleSidebar).toHaveBeenCalledTimes(1);
		expect(handleSidebar).toHaveBeenCalledWith(!isOpen);
	});
});
