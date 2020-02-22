import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useParams } from 'react-router-dom'

const Container = styled.main`
	margin: 0 auto;
	margin-bottom: 2em;
`
const List = styled.div`
	display: flex;
	flex-wrap: wrap;
`
const Image = styled.div`
	flex-basis: 33%;
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

const BreedDetail = () => {
	const { id } = useParams()
	const [ images, setImages ] = useState([])
	const [ hasError, setHasError ] = useState(false)
	useEffect(
		() => {
			const fetchData = async () => {
				try {
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
			<List>
				{images.map((image, index) => (
					<Image
						key={index}
						style={{
							backgroundImage: `url(${image})`
						}}
					/>
				))}
			</List>
		</Container>
	)
}

export default BreedDetail
