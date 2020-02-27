import React from 'react'
import styled from 'styled-components'
import Icon from '@iconify/react'
import dogIcon from '@iconify/icons-cil/dog'
import listFilter from '@iconify/icons-cil/list-filter'
import Filter from './Filter'

const Container = styled.header`
	border-bottom: 1px solid #ddd;
	position: fixed;
	width: 100%;
	top: 0;
	overflow: hidden;
	z-index: 1;
	background: white;
	padding: 14px 20px;
	display: flex;
	align-items: center;
	svg {
		font-size: 1.6em;
	}
`
const Wrap = styled.a`
	color: inherit;
	text-decoration: none;
	display: flex;
	align-items: center;
	flex: 1;
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
const Navigation = styled.div`
	flex: 1;
	text-align: right;
`
const Toggle = styled.div`
	position: fixed;
	top: 20%;
	left: 0;
	right: 0;
	overflow-x: scroll;
	border-bottom: 1px solid #ddd;
`

const Header = (props) => {
	const { handleFilter, handleToggle, isToggle } = props
	return (
		<Container>
			<Wrap href='/'>
				<Icon icon={dogIcon} />
				<div />
				<h1>Pestagram</h1>
			</Wrap>
			<Navigation>
				<Icon icon={listFilter} onClick={handleToggle} />
			</Navigation>
			{isToggle ? (
				<Toggle>
					<Filter handleFilter={handleFilter} handleToggle={handleToggle} />
				</Toggle>
			) : (
				''
			)}
		</Container>
	)
}

export default Header
