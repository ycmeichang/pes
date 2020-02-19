import React, { Component } from 'react'
import styled from 'styled-components'
import Header from './Header'
import Breeds from './Breeds'

const Container = styled.div`margin: 1.25em;`

class App extends Component {
	state = {
		error: null,
		isLoaded: false,
		breeds: []
	}
	componentDidMount() {
		fetch('https://dog.ceo/api/breeds/list/all').then((res) => res.json()).then(
			(result) => {
				this.setState({
					isLoaded: true,
					breeds: Object.keys(result.message)
				})
			},
			(error) => {
				this.setState({
					isLoaded: true,
					error
				})
			}
		)
	}
	render() {
		const { breeds } = this.state
		return (
			<Container>
				<Header />
				<Breeds breeds={breeds} />
			</Container>
		)
	}
}

export default App
