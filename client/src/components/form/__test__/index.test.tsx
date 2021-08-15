import { render, screen } from '../../../utils/test-utils';
import Form from '..';

describe('Form', () => {
	it('should render an input and a button', () => {
		render(
			<Form>
				<Form.Input
					placeholder='Enter address'
					value='abc'
					onChange={() => {}}
				/>
				<Form.Submit disabled>Add</Form.Submit>
			</Form>
		);

		expect(screen.getByPlaceholderText(/enter address/i)).toBeInTheDocument();
		expect(screen.getByText(/add/i)).toBeDisabled();
	});

	it('should have a button not disabled', () => {
		render(
			<Form>
				<Form.Submit>Add</Form.Submit>
			</Form>
		);

		expect(screen.getByText(/add/i)).not.toBeDisabled();
	});
});
