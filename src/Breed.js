import React, { useEffect, useState, Component } from 'react'
import styled from 'styled-components'
import { BrowserRouter as Router, Switch, Route, Link, useParams } from 'react-router-dom'

const Container = styled.main`
	margin: 0 auto;
	margin-bottom: 2em;
`
const List = styled.div`
	display: flex;
	flex-wrap: row wrap;
`
const Image = styled.div`
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
	background-position: center center;
	background-repeat: no-repeat;
	background-size: cover;
`

// class Breed extends Component {
// 	this.state = { images: [] }

// 	const handle = () => {
// 		const images = []
// 		this.setState({ images})
// 	}
// 	render() {
// 		return //
// 	}
// }
const Breed = () => {
	const { id } = useParams()
	const [ images, setImages ] = useState([])
	const [ hasError, setHasError ] = useState(false)
	// const fetchData = async () => {
	// 	try {
	// 		const response = await fetch(`https://dog.ceo/api/breed/${id}/images`)
	// 		const json = await response.json()
	// 		setImages(json.message)
	// 	} catch (error) {
	// 		setHasError(error)
	// 	}
	// }
	// useEffect(() => fetchData(), [ id ])
	useEffect(
		() => {
			const fetchData = async () => {
				try {
					//await promise to be either resolved/rejected
					const response = await fetch(`https://dog.ceo/api/breed/${id}/images`)
					const json = await response.json()
					setImages(json.status === 'error' ? [] : json.message)
				} catch (error) {
					setHasError(error)
				}
			}
			fetchData()
		},
		[ id ]
	)
	return (
		<Container>
			<h4>Breed: {id}</h4>
			<hr />
			{images
				.reduce((acc, _, idx, src) => {
					if (idx % 3 === 0) {
						acc.push(src.slice(idx, idx + 3))
					}
					return acc
				}, [])
				.map((images, index) => (
					<List key={index}>
						<Image
							style={{
								backgroundImage: `url(${images[0]})`
							}}
						/>
						<Image
							style={{
								backgroundImage: `url(${images[1]})`
							}}
						/>
						<Image
							style={{
								backgroundImage: `url(${images[2]})`
							}}
						/>
					</List>
				))}
		</Container>
	)
}

export default Breed
