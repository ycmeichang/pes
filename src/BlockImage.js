import React from 'react'
import styled from 'styled-components'

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

const BlockImage = ({ title, detail }) => {
	return (
		<Container>
			<h4>Breed: {title}</h4>
			<hr />
			<Wrap>
				{detail.map((detail, index) => (
					<Content
						key={index}
						style={{
							backgroundImage: `url(${detail})`
						}}
					/>
				))}
			</Wrap>
		</Container>
	)
}

export default BlockImage
