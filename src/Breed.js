import React from 'react'
import styled from 'styled-components'

const Container = styled.main`
	margin: 0 auto;
	margin-bottom: 2em;
`
const List = styled.section`
	display: flex;
	flex-wrap: row wrap;
	div {
		flex: 1;
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
		img {
			max-width: 100%;
		}
	}
`

export default () => {
	const mockImg = 'https://cdn.shopify.com/s/files/1/1061/1924/products/Dog_Emoji_large.png?v=1571606065'
	return (
		<Container>
			<div>breed 1</div>
			<hr />
			<List>
				<div>
					<img alt='' src={mockImg} />
				</div>
				<div>
					<img alt='' src={mockImg} />
				</div>
				<div>
					<img alt='' src={mockImg} />
				</div>
			</List>
		</Container>
	)
}
