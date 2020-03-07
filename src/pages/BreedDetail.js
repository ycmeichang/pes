import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import BreedInfo from '../components/BreedInfo'
import Block from '../components/Block'

const BreedDetail = () => {
	const { id } = useParams()
	const [ images, setImages ] = useState([])
	const [ avatar, setAvatar ] = useState('')
	const [ hasError, setHasError ] = useState(false)
	const type = 'image'
	useEffect(
		() => {
			const fetchData = async () => {
				try {
					const response = await fetch(`https://dog.ceo/api/breed/${id}/images`)
					const json = await response.json()
					setImages(json.status === 'error' ? [] : json.message.slice(1, 10))
					setAvatar(json.status === 'error' ? '' : json.message.slice(0, 1))
				} catch (error) {
					setHasError(error)
				}
			}
			fetchData()
		},
		[ id ]
	)
	return (
		<div>
			<BreedInfo avatar={avatar} breed={id} />
			<Block items={images} type={type} />
		</div>
	)
}

export default BreedDetail
