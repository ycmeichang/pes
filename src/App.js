import React from 'react'
import styled from 'styled-components'
import Header from './Header'
import Breeds from './Breeds'

const Container = styled.div`margin: 1.25em;`

export default () => (
	<Container>
		<Header />
		<Breeds />
	</Container>
)
