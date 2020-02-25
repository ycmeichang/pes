import React from 'react'
import styled from 'styled-components'
import Icon from '@iconify/react'
import dogIcon from '@iconify/icons-cil/dog'

const Header = styled.header`
	display: flex;
	margin-bottom: 1em;
	border-bottom: 1px solid #ddd;
	position: fixed;
	overflow: hidden;
	width: 100%;
	top: 0;
	z-index: 1;
	background: white;
	padding-top: 1em;
	img {
		max-width: 30%;
	}
	svg {
		width: 2em;
		height: 2.4em;
	}
	div {
		background-color: #222;
		height: 32px;
		margin: 5px 15px;
		width: 1px;
	}
`

export default () => (
	<Header>
		<Icon icon={dogIcon} />
		<div />
		<img alt='logo' src='logo.png' />
	</Header>
)
