import { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';

import Header from '../header';
import Sidebar from '../sidebar';
import Error from '../error';

import Home from '../../pages/home';
import PropertyDetail from '../../pages/propertyDetail';

import { HOME, PROPERTY_DETAIL } from '../../constants/routes';

import { AppContainer, MainContainer } from './index.styles';

// import { useTranslation } from 'react-i18next';

const App = () => {
	const [showSidebar, setShowSidebar] = useState(false);

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

			<Header isOpen={showSidebar} handleSidebar={setShowSidebar} />
			<AppContainer>
				<Sidebar isOpen={showSidebar} handleSidebar={setShowSidebar} />

				<MainContainer>
					<ErrorBoundary FallbackComponent={Error}>
						<Switch>
							<Route exact path={HOME}>
								<Home />
							</Route>
							<Route path={PROPERTY_DETAIL}>
								<PropertyDetail />
							</Route>
						</Switch>
					</ErrorBoundary>
				</MainContainer>
			</AppContainer>
		</Router>
	);
};

export default App;
