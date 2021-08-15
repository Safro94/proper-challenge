import { render, screen } from '../../../utils/test-utils';
import Form from '..';

describe('Form', () => {
	const onClick = jest.fn();
	it('should render a label, an input and a button', () => {
		render(
			<Form>
				<Form.Label>Label</Form.Label>
				<Form.Input
					placeholder='Enter address'
					value='abc'
					onChange={() => {}}
				/>
				<Form.Submit onClick={onClick} disabled>
					Add
				</Form.Submit>
			</Form>
		);

		expect(screen.getByText(/label/i)).toBeInTheDocument();
		expect(screen.getByPlaceholderText(/enter address/i)).toBeInTheDocument();
		expect(screen.getByText(/add/i)).toBeDisabled();
	});

	it('should have a button not disabled', () => {
		render(
			<Form>
				<Form.Submit onClick={onClick}>Add</Form.Submit>
			</Form>
		);

		expect(screen.getByText(/add/i)).not.toBeDisabled();
	});
});
