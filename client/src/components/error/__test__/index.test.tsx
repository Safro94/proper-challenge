import { render, screen } from '../../../utils/test-utils';

import Error from '..';
import userEvent from '@testing-library/user-event';

describe('Error', () => {
	const resetErrorBoundary = jest.fn();

	beforeEach(() => {
		render(<Error resetErrorBoundary={resetErrorBoundary} />);
	});

	it('should show an image and a text', () => {
		expect(screen.getByAltText(/error/i)).toBeInTheDocument();
		expect(screen.getByText(/text/i)).toBeInTheDocument();
		expect(screen.getByText(/goBack/i)).toBeInTheDocument();
	});

	it('should call resetErrorBoundary when the reset text is clicked', () => {
		userEvent.click(screen.getByText(/goBack/i));
		expect(resetErrorBoundary).toHaveBeenCalledTimes(1);
	});
});
