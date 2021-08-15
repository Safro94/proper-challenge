import { useTranslation } from 'react-i18next';

import { SupportedLanguages } from '../../types';

import {
	LanguageToogleButton,
	LanguageToogleButtonsContainer,
} from './index.styles';

const LanguageToogle = () => {
	const { i18n } = useTranslation();

	const changeLanguage = (language: string) => {
		i18n.changeLanguage(language);
	};

	return (
		<LanguageToogleButtonsContainer>
			{Object.values(SupportedLanguages).map(language => (
				<LanguageToogleButton
					key={language}
					isActive={i18n.language === language}
					onClick={() => changeLanguage(language)}
				>
					{language.toUpperCase()}
				</LanguageToogleButton>
			))}
		</LanguageToogleButtonsContainer>
	);
};

export default LanguageToogle;
