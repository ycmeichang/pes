import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Container = styled.main`
	margin: 0 auto;
	margin-bottom: 2em;
`
const List = styled.div`
	display: flex;
	flex-wrap: wrap;
	div {
		flex-basis: 33%;
		text-align: center;
		border: 1px solid;
		margin-right: -1px;
		margin-bottom: -1px;
		position: relative;
		:before {
			content: '';
			float: left;
			padding-top: 100%;
		}
		a {
			margin: 0;
			position: absolute;
			top: 50%;
			left: 50%;
			-ms-transform: translate(-50%, -50%);
			transform: translate(-50%, -50%);
		}
	}
`

class Breeds extends Component {
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
			<Container>
				<div>
					{letters.map((letter, index) => (
						<input key={index} type='button' value={letter} onClick={this.handleChange} />
					))}
				</div>
				{Object.keys(groupedBreeds).map((key) => (
					<div>
						<h4>{key}</h4>
						<hr />
						<List>
							{groupedBreeds[key].map((breed, index) => (
								<div key={index}>
									<Link to={`/${breed}`}>{breed}</Link>
								</div>
							))}
						</List>
					</div>
				))}
			</Container>
		)
	}
}

export default Breeds
