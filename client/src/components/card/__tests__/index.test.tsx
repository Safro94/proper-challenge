import { render, screen } from '../../../utils/test-utils';

import Card from '..';

describe('Card', () => {
	it('should render children', () => {
		render(<Card>Test</Card>);

		expect(screen.getByText(/test/i)).toBeInTheDocument();
	});
});
