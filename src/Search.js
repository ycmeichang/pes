import React, { useState } from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'
import { Routes } from './routes'

const Container = styled.div`
	display: flex;
	input {
		flex-basis: 75%;
		padding: 1em 2em;
		font-size: 18px;
		border: none;
	}
	button {
		flex-basis: 25%;
		background: white;
		border: none;
		border-left: 1px solid #ddd;
		:focus {
			outline: none;
		}
	}
`

const Search = ({ handleToggleSearch }) => {
	const [ value, setValue ] = useState('')
	const history = useHistory()
	const handleChange = ({ target: { value } }) => {
		setValue(value)
	}
	const handleSearch = () => {
		history.push(Routes.showBreedDetail(value.toLowerCase()))
		handleToggleSearch()
	}
	return (
		<Container>
			<input type='text' name='search' value={value} onChange={handleChange} />
			<button onClick={handleSearch}>Search</button>
		</Container>
	)
}

export default Search
