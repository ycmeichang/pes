import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import BlockImage from './BlockImage'

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
	return <BlockImage title={id} detail={images} />
}

export default BreedDetail
