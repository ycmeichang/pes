import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import BreedList from './pages/BreedList'
import BreedDetail from './pages/BreedDetail'
import { Routes } from './routes'
import GlobalStyles from './globalStyles'

const App = () => {
	return (
		<React.Fragment>
			<GlobalStyles />
			<Router>
				<Header />
				<Switch>
					<Route path={Routes.breedDetail} children={<BreedDetail />} />
					<Route path={Routes.root}>
						<BreedList />
					</Route>
				</Switch>
			</Router>
			<Footer />
		</React.Fragment>
	)
}

export default App
