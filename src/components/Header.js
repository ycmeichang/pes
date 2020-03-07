import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Icon from '@iconify/react'
import dogIcon from '@iconify/icons-cil/dog'
import { Routes } from '../routes'

const Wrap = styled.header`
	position: fixed;
	width: 100%;
	top: 0;
	overflow: hidden;
	z-index: 1;
	background: white;
`
const HeaderIcon = styled(Icon)`
	font-size: 1.6em;
	margin-left: 15px;
	:first-child {
		margin: 0;
	}
`
const FlexContainer = styled.div`
	display: flex;
	align-items: center;
	border-bottom: 1px solid #ddd;
	padding: 14px 20px;
`
const StyledLink = styled(Link)`
	color: inherit;
	text-decoration: none;
	display: flex;
	flex: 1;
	align-items: center;
	h1 {
		font-family: 'Cookie';
		font-weight: initial;
		margin: 0;
	}
	div {
		background-color: #222;
		height: 32px;
		margin: 5px 15px;
		width: 1px;
	}
`

const Header = () => {
	return (
		<Wrap>
			<FlexContainer>
				<StyledLink to={Routes.root}>
					<HeaderIcon icon={dogIcon} />
					<div />
					<h1>Pestagram</h1>
				</StyledLink>
			</FlexContainer>
		</Wrap>
	)
}

export default Header
