import React, { useState } from 'react'
import styled from 'styled-components'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from './Header'
import Filter from './Filter'
import BreedList from './BreedList'
import BreedDetail from './BreedDetail'

const Container = styled.div`margin: 1.25em;`

const App = () => {
	const [ filterBy, setFilterBy ] = useState('')
	const handleFilter = (value) => {
		setFilterBy(value.toLowerCase())
	}
	return (
		<Container>
			<Header />
			<Router>
				<Switch>
					<Route path='/:id' children={<BreedDetail />} />
					<Route path='/'>
						<Filter handleFilter={handleFilter} />
						<BreedList filterBy={filterBy} />
					</Route>
				</Switch>
			</Router>
		</Container>
	)
}

export default App
