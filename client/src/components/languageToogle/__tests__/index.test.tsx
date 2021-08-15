import userEvent from '@testing-library/user-event';
import { render, screen } from '../../../utils/test-utils';

import LanguageToogle from '..';

import { SupportedLanguages } from '../../../types';

import { useTranslation } from 'react-i18next';
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

	// it('should call changeLanguage when the butto is clicked', () => {
	// 	(useTranslation().i18n.changeLanguage as jest.Mock).mockImplementation(() =>
	// 		Promise.resolve(1)
	// 	);

	// 	render(<LanguageToogle />);
	// 	const button = screen.getByRole('button', {
	// 		name: SupportedLanguages.EN.toUpperCase(),
	// 	});

	// 	userEvent.click(button);

	// 	expect(
	// 		(useTranslation().i18n.changeLanguage as jest.Mock).mock.calls
	// 	).toHaveBeenCalledTimes(1);
	// 	expect(useTranslation().i18n.changeLanguage).toHaveBeenCalledWith(
	// 		SupportedLanguages.EN
	// 	);
	// });
});
