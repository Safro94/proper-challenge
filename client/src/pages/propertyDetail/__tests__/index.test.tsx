import { render, screen } from '../../../utils/test-utils';

import DetailContainer from '..';

jest.mock('../../../containers/detail', () => () => (
	<div>Detail container</div>
));

describe('DetailContainer', () => {
	it('should render the mocked container', () => {
		render(<DetailContainer />);

		expect(screen.getByText(/detail container/i)).toBeInTheDocument();
	});
});
