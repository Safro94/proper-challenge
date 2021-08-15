import { render, screen } from '../../../utils/test-utils';

import Home from '..';

jest.mock('../../../containers/properties', () => () => (
	<div>Property container</div>
));

describe('Home', () => {
	it('should render the mocked container', () => {
		render(<Home />);

		expect(screen.getByText(/property container/i)).toBeInTheDocument();
	});
});
