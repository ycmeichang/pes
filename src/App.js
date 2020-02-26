import React, { useState } from 'react'
import styled from 'styled-components'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from './Header'
import Filter from './Filter'
import BreedList from './BreedList'
import BreedDetail from './BreedDetail'

const Container = styled.div`margin: 0 auto;`
const Content = styled.main`
	margin-top: 4em;
	padding: 26px 20px;
`

const App = () => {
	const [ filterBy, setFilterBy ] = useState('')
	const handleFilter = (value) => {
		setFilterBy(value.toLowerCase())
	}
	return (
		<Container>
			<Header />
			<Content>
				<Router>
					<Switch>
							{/* <Filter handleFilter={handleFilter} /> */}
							<BreedList filterBy={filterBy} />
						</Route>
					</Switch>
				</Router>
			</Content>
		</Container>
	)
}

export default App
