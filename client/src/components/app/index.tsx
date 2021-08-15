import { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';

import Header from '../header';
import Sidebar from '../sidebar';
import Error from '../error';

import Home from '../../pages/home';
import PropertyDetail from '../../pages/propertyDetail';
import NotFound from '../../pages/notFound';
import NewProperty from '../../pages/newProperty';

import { HOME, NEW_PROPERTY, PROPERTY_DETAIL } from '../../constants/routes';

import { AppContainer, MainContainer } from './index.styles';

const App = () => {
	const [showSidebar, setShowSidebar] = useState(false);

	return (
		<Router>
			<Header isOpen={showSidebar} handleSidebar={setShowSidebar} />
			<AppContainer>
				<Sidebar isOpen={showSidebar} handleSidebar={setShowSidebar} />

				<MainContainer>
					<ErrorBoundary FallbackComponent={Error}>
						<Switch>
							<Route exact path={HOME}>
								<Home />
							</Route>

							<Route exact path={NEW_PROPERTY}>
								<NewProperty />
							</Route>

							<Route exact path={PROPERTY_DETAIL}>
								<PropertyDetail />
							</Route>

							<Route component={NotFound} />
						</Switch>
					</ErrorBoundary>
				</MainContainer>
			</AppContainer>
		</Router>
	);
};

export default App;
