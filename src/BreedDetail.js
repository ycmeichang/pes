import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Block from './Block'

const BreedDetail = () => {
	const { id } = useParams()
	const [ images, setImages ] = useState([])
	const [ hasError, setHasError ] = useState(false)
	const type = 'image'
	useEffect(
		() => {
			const fetchData = async () => {
				try {
					const response = await fetch(`https://dog.ceo/api/breed/${id}/images`)
					const json = await response.json()
					setImages(json.status === 'error' ? [] : json.message.slice(0, 9))
				} catch (error) {
					setHasError(error)
				}
			}
			fetchData()
		},
		[ id ]
	)
	return <Block title={id} items={images} type={type} />
}

export default BreedDetail
