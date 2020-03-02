import React, { useState } from 'react'
import styled from 'styled-components'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import BreedList from './BreedList'
import BreedDetail from './BreedDetail'
import { Routes } from './routes'

const Container = styled.div`margin: 0 auto;`
const Content = styled.main`margin-top: 6em;`

const App = () => {
	const [ filterBy, setFilterBy ] = useState('')
	const [ isToggle, setIsToggle ] = useState(false)
	const handleFilter = (value) => {
		setFilterBy(value.toLowerCase())
		setIsToggle(!isToggle)
	}
	const handleToggle = () => {
		setIsToggle(!isToggle)
	}
	return (
		<Container>
			<Router>
				<Header handleFilter={handleFilter} handleToggle={handleToggle} isToggle={isToggle} />
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
