import React, { Component } from 'react'
import BlockContent from './BlockContent'

class BreedList extends Component {
	state = { firstLetter: '' }
	handleChange = ({ target: { value } }) => {
		this.setState({ firstLetter: value })
		this.props.handleFilter(value)
	}
	render() {
		const { breeds } = this.props
		const { firstLetter } = this.state
		const letters = []
		const groupedBreeds = {}
		for (let i = 65; i <= 90; i++) {
			letters.push(String.fromCharCode(i))
			groupedBreeds[String.fromCharCode(i).toLowerCase()] = []
		}
		for (let i = 0; i < breeds.length; i++) {
			const key = breeds[i].charAt(0)
			groupedBreeds[key] = groupedBreeds[key].concat(breeds[i])
		}
		return (
			<>
				{letters.map((letter, index) => (
					<input key={index} type='button' value={letter} onClick={this.handleChange} />
				))}
				<BlockContent breeds={groupedBreeds} />
			</>
		)
	}
}

export default BreedList
