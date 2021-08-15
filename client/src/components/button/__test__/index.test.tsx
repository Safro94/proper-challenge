import { render, screen } from '../../../utils/test-utils';
import Button from '..';
import userEvent from '@testing-library/user-event';

describe('Button', () => {
	const onClick = jest.fn();

	it('should render button with default type button', () => {
		render(
			<Button onClick={onClick} disabled={false}>
				Button text
			</Button>
		);

		expect(
			screen.getByRole('button', { name: /button text/i })
		).toBeInTheDocument();
	});

	it('should render button with type submit and disabled', () => {
		render(
			<Button onClick={onClick} disabled type='submit'>
				Button text
			</Button>
		);

		const button = screen.getByRole('button', { name: /button text/i });

		expect(button).toBeInTheDocument();
		expect(button).toBeDisabled();
		expect(button).toHaveAttribute('type', 'submit');
	});

	it('should call onClick', () => {
		render(<Button onClick={onClick}>Button text</Button>);

		expect(onClick).not.toHaveBeenCalled();

		const button = screen.getByRole('button', { name: /button text/i });
		userEvent.click(button);

		expect(onClick).toHaveBeenCalledTimes(1);
	});
});
