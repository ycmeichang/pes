import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
	width: max-content;
	input {
		border: none;
		font-size: 14px;
		padding: 14px 20px;
		border-right: 1px solid #ddd;
	}
`

const Filter = (props) => {
	const letters = []
	for (let i = 65; i <= 90; i++) {
		letters.push(String.fromCharCode(i))
	}
	const { handleFilter } = props
	return (
		<Container id='nav'>
			{letters.map((letter, index) => (
				<input type='button' key={index} value={letter} onClick={(e) => handleFilter(e.target.value)} />
			))}
		</Container>
	)
}

export default Filter
