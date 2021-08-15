import { render, screen } from '../../../utils/test-utils';

import Sidebar from '..';
import userEvent from '@testing-library/user-event';

describe('Sidebar', () => {
	const handleSidebar = jest.fn();
	const isOpen = false;

	beforeEach(() => {
		render(<Sidebar handleSidebar={handleSidebar} isOpen={isOpen} />);
	});

	it('should render correctly', () => {
		const { container } = render(
			<Sidebar handleSidebar={handleSidebar} isOpen={isOpen} />
		);
		expect(container.firstChild).toMatchSnapshot();
	});

	it('should have a link to the home page', () => {
		expect(screen.getByRole('link')).toBeInTheDocument();
		expect((screen.getByRole('link') as HTMLLinkElement).href).toBe(
			'http://localhost/'
		);
	});

	it('should call handleSidebar when the close-button is clicked', () => {
		expect(handleSidebar).not.toHaveBeenCalled();
		userEvent.click(screen.getByTestId('close-button'));

		expect(handleSidebar).toHaveBeenCalledTimes(1);
		expect(handleSidebar).toHaveBeenCalledWith(!isOpen);
	});
});
