import React, { useState, useEffect } from 'react'
import Block from '../components/Block'
import { Container } from '../components/Container'
import Input from '../components/Input'

const BreedList = () => {
  const [type] = useState('link')
  const [search, setSearch] = useState('')
  const [breeds, setBreeds] = useState([])
  const [hasError, setHasError] = useState(false)
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://dog.ceo/api/breeds/list/all')
        const json = await response.json()
        const breeds = Object.keys(json.message)
        // TODO: sub-breed
        setBreeds(breeds)
      } catch (error) {
        setHasError(error)
      }
    }
    fetchData()
  }, [])
  const handleSearch = ({ target: { value } }) => {
    setSearch(value)
  }
  return (
    <Container>
      <Input handleSearch={handleSearch} search={search} />
      <Block
        items={breeds.filter((breed) => breed.includes(search.toLowerCase()))}
        type={type}
      />
    </Container>
  )
}

export default BreedList
