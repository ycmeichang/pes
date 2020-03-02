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
	const [ filterBy, setFilterBy ] = useState('')
	const [ isToggleFilter, setIsToggleFilter ] = useState(false)
	const [ isToggleSearch, setIsToggleSearch ] = useState(false)
	const handleFilter = (value) => {
		setFilterBy(value.toLowerCase())
		handleToggleFilter()
	}
	const handleToggleFilter = () => {
		setIsToggleFilter(!isToggleFilter)
	}
	const handleToggleSearch = () => {
		setIsToggleSearch(!isToggleSearch)
	}
	return (
		<Container>
			<Router>
				<Header
					handleFilter={handleFilter}
					handleToggleFilter={handleToggleFilter}
					handleToggleSearch={handleToggleSearch}
					isToggleFilter={isToggleFilter}
					isToggleSearch={isToggleSearch}
				/>
				<Content>
					<Switch>
						<Route path={Routes.breedDetail} children={<BreedDetail />} />
						<Route path={Routes.root}>
							<BreedList filterBy={filterBy} />
						</Route>
					</Switch>
				</Content>
			</Router>
			<Footer />
		</Container>
	)
}

export default App
