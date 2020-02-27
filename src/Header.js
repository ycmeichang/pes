import React from 'react'
import styled from 'styled-components'
import Icon from '@iconify/react'
import dogIcon from '@iconify/icons-cil/dog'
import listFilter from '@iconify/icons-cil/list-filter'
import Filter from './Filter'

const Container = styled.header`
	position: fixed;
	width: 100%;
	top: 0;
	overflow: hidden;
	z-index: 1;
	background: white;
	svg {
		font-size: 1.6em;
	}
`
const Wrap = styled.div`
	display: flex;
	align-items: center;
	border-bottom: 1px solid #ddd;
	padding: 14px 20px;
`
const Logo = styled.a`
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
const Menu = styled.div`
	flex: 1;
	text-align: right;
`
const Toggle = styled.div`
	overflow-x: scroll;
	border-bottom: 1px solid #ddd;
	input {
		border: none;
		font-size: 14px;
		padding: 15px 30px;
		border-right: 1px solid #ddd;
		:last-child {
			border: none;
		}
		:focus {
			outline: none;
		}
	}
`

const Header = (props) => {
	const { handleFilter, handleToggle, isToggle } = props
	return (
		<Container>
			<Wrap>
				<Logo href='/'>
					<Icon icon={dogIcon} />
					<div />
					<h1>Pestagram</h1>
				</Logo>
				<Menu>
					<Icon icon={listFilter} onClick={handleToggle} />
				</Menu>
			</Wrap>
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
