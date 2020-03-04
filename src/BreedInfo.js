import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
	padding: 14px 20px;
	display: flex;
	align-items: flex-start;
`
const Avatar = styled.div`
	border-radius: 50% 50%;
	height: 90px;
	width: 90px;
	background-position: center center;
	background-repeat: no-repeat;
	background-size: cover;
	background-image: url(${(props) => props.avatar});
`
const Title = styled.div`
	flex-direction: column;
	margin-left: 1.5em;
	text-transform: capitalize;
	h1 {
		margin: 0;
		margin-bottom: .25rem;
		font-weight: normal;
	}
`
const Button = styled.button`
	background: #3897f0;
	border-radius: 4px;
	border: 0;
	padding: .5rem 1em;
	color: white;
	font-weight: bold;
	font-size: 14px;
`

const BreedInfo = ({ avatar, breed }) => {
	return (
		<Container>
			<Avatar avatar={avatar} />
			<Title>
				<h1>{breed}</h1>
				<Button>Follow</Button>
			</Title>
		</Container>
	)
}

export default BreedInfo
