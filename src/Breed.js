import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { BrowserRouter as Router, Switch, Route, Link, useParams } from 'react-router-dom'

const Container = styled.main`
	margin: 0 auto;
	margin-bottom: 2em;
`
const List = styled.section`
	display: flex;
	flex-wrap: row wrap;
	div {
		flex: 1;
		text-align: center;
		vertical-align: middle;
		border: 1px solid;
		margin-right: -1px;
		position: relative;
		:before {
			content: '';
			float: left;
			padding-top: 100%;
		}
		img {
			max-width: 100%;
		}
	}
`

const Breed = () => {
	const { id } = useParams()
	const [ images, setImages ] = useState([])
	const [ hasError, setHasError ] = useState(false)
	async function fetchData() {
		//use backtips and ${} to include a variable inside url
		const res = await fetch(`https://dog.ceo/api/breed/${id}/images`)
		res.json().then((res) => setImages(res.message)).catch((error) => setHasError(error))
	}
	useEffect(() => {
		fetchData()
	}, [])
	return (
		<Container>
			<h4>Breed: {id}</h4>
			<hr />
			<List>
				<div>
					<img alt='' src={mockImg} />
				</div>
				<div>
					<img alt='' src={mockImg} />
				</div>
				<div>
					<img alt='' src={mockImg} />
				</div>
			</List>
		</Container>
	)
}

export default Breed
