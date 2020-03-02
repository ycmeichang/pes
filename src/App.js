import React, { useState } from 'react'
import styled from 'styled-components'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import BreedList from './BreedList'
import BreedDetail from './BreedDetail'
import { Routes } from './routes'

const Container = styled.div`margin: 0 auto;`
const Content = styled.main`margin: 6em 0;`

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
		<Container>
			<Router>
				<Header
					handleFilter={handleFilter}
					handleToggleFilter={handleToggleFilter}
					handleToggleSearch={handleToggleSearch}
					isToggleFilter={headerState.isFilter}
					isToggleSearch={headerState.isSearch}
				/>
				<Content>
					<Switch>
						<Route path={Routes.breedDetail} children={<BreedDetail />} />
						<Route path={Routes.root}>
							<BreedList filterBy={headerState.filterBy} />
						</Route>
					</Switch>
				</Content>
			</Router>
			<Footer />
		</Container>
	)
}

export default App
