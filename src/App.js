import React, { Component } from 'react'
import styled from 'styled-components'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from './Header'
import Breeds from './Breeds'
import Breed from './Breed'

const Container = styled.div`margin: 1.25em;`

class App extends Component {
	state = {
		error: null,
		isLoaded: false,
		breeds: []
	}
	componentDidMount() {
		fetch('https://dog.ceo/api/breeds/list/all')
			.then((response) => response.json())
			.then((response) => {
				this.setState({
					isLoaded: true,
					breeds: Object.keys(response.message)
				})
			})
			.catch((error) => {
				this.setState({
					isLoaded: true,
					error
				})
			})
	}
	handleFilter = (value) => {
		const { breeds } = this.state
		this.setState({
			breeds: breeds.filter((breed) => breed.startsWith(value.toLowerCase()))
		})
	}
	render() {
		const { breeds } = this.state
		return (
			<Container>
				<Header />
				<Router>
					<Switch>
						<Route path='/:id' children={<Breed />} />
						<Route path='/'>
							<Breeds breeds={breeds} handleFilter={this.handleFilter} />
						</Route>
					</Switch>
				</Router>
			</Container>
		)
	}
}

export default App
