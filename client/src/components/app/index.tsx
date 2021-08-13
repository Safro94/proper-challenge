import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from '../header';

import Home from '../../pages/home';
import PropertyDetail from '../../pages/propertyDetail';

import { AppContainer } from './index.styles';

// import { useTranslation } from 'react-i18next';

const App = () => {
	// const { t, i18n } = useTranslation('app');

	// const changeLanguage = (language: string) => {
	// 	i18n.changeLanguage(language);
	// };

	return (
		<Router>
			{/* <div>
				<button onClick={() => changeLanguage('en')}>EN</button>
				<button onClick={() => changeLanguage('es')}>ES</button>
			</div> */}

			<Header />
			<AppContainer>
				<Switch>
					<Route exact path='/'>
						<Home />
					</Route>
					<Route path='/property/:propertyId'>
						<PropertyDetail />
					</Route>
				</Switch>
			</AppContainer>
		</Router>
	);
};

export default App;
