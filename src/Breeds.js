import React, { Component } from 'react'
import styled from 'styled-components'
import { BrowserRouter as Router, Switch, Route, Link, useParams } from 'react-router-dom'

const Container = styled.main`
	margin: 0 auto;
	margin-bottom: 2em;
`
const List = styled.div`
	display: flex;
	flex-wrap: row wrap;
	div {
		flex: 1;
		text-align: center;
		vertical-align: middle;
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
		for (let i = 65; i <= 90; i++) {
			letters.push(String.fromCharCode(i))
		}
		return (
			<Container>
				<div>
					{letters.map((letter, index) => (
						<input key={index} type='button' value={letter} onClick={this.handleChange} />
					))}
				</div>
				<h4>{firstLetter ? firstLetter : ''}</h4>
				<hr />
				{breeds
					.reduce((acc, _, idx, src) => {
						if (idx % 3 === 0) acc.push(src.slice(idx, idx + 3))
						return acc
					}, [])
					.map((breeds, index) => (
						<List key={index}>
							<div key={breeds[0]}>
								<Link to={'/' + breeds[0]}>{breeds[0]}</Link>
							</div>
							<div key={breeds[1]}>
								<Link to={'/' + breeds[1]}>{breeds[1]}</Link>
							</div>
							<div key={breeds[2]}>
								<Link to={'/' + breeds[2]}>{breeds[2]}</Link>
							</div>
						</List>
					))}
			</Container>
		)
	}
}

export default Breeds
