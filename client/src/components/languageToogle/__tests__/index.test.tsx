import { render, screen } from '../../../utils/test-utils';

import LanguageToogle from '..';

import { SupportedLanguages } from '../../../types';

jest.mock('react-i18next');

describe('LanguageToogle', () => {
	it('should render two buttons with en and es', () => {
		render(<LanguageToogle />);

		const buttons = screen.getAllByRole('button');
		expect(buttons).toHaveLength(2);

		expect(
			screen.getByRole('button', { name: SupportedLanguages.EN.toUpperCase() })
		).toBeInTheDocument();
	});
});
