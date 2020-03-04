import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Routes } from './routes'

const Container = styled.div`
	width: max-content;
	input {
		border: none;
		border-right: 1px solid #ddd;
		font-size: 18px;
		padding: 15px 30px;
		:focus {
			outline: none;
		}
	}
`

const Filter = ({ handleFilter }) => {
	const letters = []
	for (let i = 65; i <= 90; i++) {
		letters.push(String.fromCharCode(i))
	}
	return (
		<Container>
			{letters.map((letter, index) => (
				<Link to={Routes.root} key={index}>
					<input type='button' value={letter} onClick={(e) => handleFilter(e.target.value)} />
				</Link>
			))}
		</Container>
	)
}

export default Filter
