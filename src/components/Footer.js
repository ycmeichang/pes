import React from 'react'
import styled from 'styled-components'

const Container = styled.footer`
  margin: 0 auto;
  padding: 1em 0;
  text-align: center;
`

const Footer = () => {
  return <Container>&copy; {new Date().getFullYear()} Pestagram</Container>
}

export default Footer
