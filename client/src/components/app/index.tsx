import { useTranslation } from 'react-i18next';

const App = () => {
	const { t, i18n } = useTranslation('app');

	const changeLanguage = (language: string) => {
		i18n.changeLanguage(language);
	};

	return (
		<div>
			{t('title')}
			<div>
				<button onClick={() => changeLanguage('en')}>EN</button>
				<button onClick={() => changeLanguage('es')}>ES</button>
			</div>
		</div>
	);
};

export default App;
