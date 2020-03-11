import React from 'react'
import styled from 'styled-components'

const StyledInput = styled.input`
	padding: 1rem;
	font-size: 20px;
	border: 0;
	:focus {
		outline: none;
	}
`

const Input = ({ handleSearch, search }) => (
	<StyledInput autoFocus placeholder='Search Breed' value={search} onChange={handleSearch} />
)

export default Input
