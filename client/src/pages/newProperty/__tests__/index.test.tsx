import { render, screen } from '../../../utils/test-utils';

import NewProperty from '..';

jest.mock('../../../containers/newProperty', () => () => (
	<div>New Property container</div>
));

describe('NewProperty', () => {
	it('should render the mocked container', () => {
		render(<NewProperty />);

		expect(screen.getByText(/new property container/i)).toBeInTheDocument();
	});
});
