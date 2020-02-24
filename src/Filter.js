import React from 'react'

const Filter = (props) => {
	const letters = []
	for (let i = 65; i <= 90; i++) {
		letters.push(String.fromCharCode(i))
	}
	const { handleFilter } = props
	return (
		<div>
			{letters.map((letter, index) => (
				<input key={index} type='button' value={letter} onClick={(e) => handleFilter(e.target.value)} />
			))}
		</div>
	)
}

export default Filter
