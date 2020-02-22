import React, { Component } from 'react'
import Block from './Block'

class BreedList extends Component {
	state = { type: 'link' }
	handleChange = ({ target: { value } }) => {
		this.props.handleFilter(value)
	}
	render() {
		const { breeds } = this.props
		const { type } = this.state
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
			<div>
				{letters.map((letter, index) => (
					<input key={index} type='button' value={letter} onClick={this.handleChange} />
				))}
				{Object.keys(groupedBreeds).map((key) => <Block items={groupedBreeds[key]} title={key} type={type} />)}
			</div>
		)
	}
}

export default BreedList
