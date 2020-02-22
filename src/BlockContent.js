import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Container = styled.main`
	margin: 0 auto;
	margin-bottom: 2em;
`
const Wrap = styled.div`
	display: flex;
	flex-wrap: wrap;
`

const Content = styled.div`
	flex-basis: 33%;
	text-align: center;
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
`

const BlockContent = ({ breeds }) => {
	return (
		<Container>
			{Object.keys(breeds).map((key) => (
				<div key={key}>
					<h4>{key}</h4>
					<hr />
					<Wrap>
						{breeds[key].map((breed, index) => (
							<Content key={index}>
								<Link to={`/${breed}`}>{breed}</Link>
							</Content>
						))}
					</Wrap>
				</div>
			))}
		</Container>
	)
}

export default BlockContent
