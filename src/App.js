import React, { useState } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import BreedList from './pages/BreedList'
import BreedDetail from './pages/BreedDetail'
import { Routes } from './routes'
import GlobalStyles from './globalStyles'

const App = () => {
	const [ headerState, setHeaderState ] = useState({
		filterBy: '',
		isFilter: false,
		isSearch: false
	})
	const handleFilter = (value) => {
		setHeaderState({
			filterBy: value.toLowerCase(),
			isFilter: false,
			isSearch: false
		})
	}
	const handleToggleFilter = () => {
		setHeaderState({
			filterBy: '',
			isFilter: !headerState.isFilter,
			isSearch: false
		})
	}
	const handleToggleSearch = () => {
		setHeaderState({
			filterBy: '',
			isFilter: false,
			isSearch: !headerState.isSearch
		})
	}
	return (
		<React.Fragment>
			<GlobalStyles />
			<Router>
				<Header
					handleFilter={handleFilter}
					handleToggleFilter={handleToggleFilter}
					handleToggleSearch={handleToggleSearch}
					isToggleFilter={headerState.isFilter}
					isToggleSearch={headerState.isSearch}
				/>
				<Switch>
					<Route path={Routes.breedDetail} children={<BreedDetail />} />
					<Route path={Routes.root}>
						<BreedList filterBy={headerState.filterBy} />
					</Route>
				</Switch>
			</Router>
			<Footer />
		</React.Fragment>
	)
}

export default App
