import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Routes } from './routes'

const Container = styled.div`width: max-content;`

const Filter = (props) => {
	const letters = []
	for (let i = 65; i <= 90; i++) {
		letters.push(String.fromCharCode(i))
	}
	const { handleFilter } = props
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
