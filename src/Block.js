import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Routes } from './Routes'

const Container = styled.section`
	margin: 0 auto;
	margin: 2em 0;
`
const Wrap = styled.div`
	display: flex;
	flex-wrap: wrap;
`
const Content = styled.div`
	flex-basis: 33%;
	text-align: center;
	vertical-align: middle;
	border: 1px solid;
	margin-right: -1px;
	margin-bottom: -1px;
	position: relative;
	:before {
		content: '';
		float: left;
		padding-top: 100%;
	}
	a {
		margin: 0;
		position: absolute;
		top: 50%;
		left: 50%;
		-ms-transform: translate(-50%, -50%);
		transform: translate(-50%, -50%);
	}
	background-position: center center;
	background-repeat: no-repeat;
	background-size: cover;
`

const Title = styled.div`
	border-bottom: 1px solid #ddd;
	margin-bottom: 1em;
	p {
		margin-bottom: 5px;
	}
`

const Block = ({ title, items, type }) => {
	return (
		<Container>
			<Title>
				<p>{type === 'image' ? `Breed: ${title}` : title.toUpperCase()}</p>
			</Title>

			{type === 'image' ? (
				<Wrap>
					{items.map((item, index) => <Content key={index} style={{ backgroundImage: `url(${item})` }} />)}
				</Wrap>
			) : (
				<Wrap>
					{items.map((item, index) => (
						<Content key={index}>
							<Link to={Routes.showBreedDetail(item)}>{item}</Link>
						</Content>
					))}
				</Wrap>
			)}
		</Container>
	)
}

export default Block
