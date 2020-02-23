import React from 'react'
import styled from 'styled-components'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from './Header'
import BreedList from './BreedList'
import BreedDetail from './BreedDetail'

const Container = styled.div`margin: 1.25em;`

const App = () => {
	return (
		<Container>
			<Header />
			<Router>
				<Switch>
					<Route path='/:id' children={<BreedDetail />} />
					<Route path='/'>
						<BreedList />
					</Route>
				</Switch>
			</Router>
		</Container>
	)
}

export default App
