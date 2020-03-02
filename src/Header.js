import React from 'react'
import styled from 'styled-components'
import Icon from '@iconify/react'
import dogIcon from '@iconify/icons-cil/dog'
import listFilter from '@iconify/icons-cil/list-filter'
import magnifyingGlass from '@iconify/icons-cil/magnifying-glass'
import Filter from './Filter'
import Search from './Search'

const Container = styled.header`
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
`

const Header = ({ handleFilter, handleToggleFilter, handleToggleSearch, isToggleFilter, isToggleSearch }) => {
	return (
		<Container>
			<Wrap>
				<Logo href='/'>
					<HeaderIcon icon={dogIcon} />
					<div />
					<h1>Pestagram</h1>
				</Logo>
				<Menu>
					<HeaderIcon icon={magnifyingGlass} onClick={handleToggleSearch} />
					<HeaderIcon icon={listFilter} onClick={handleToggleFilter} />
				</Menu>
			</Wrap>
			<Toggle>
				{isToggleFilter && <Filter handleFilter={handleFilter} />}
				{isToggleSearch && <Search handleToggleSearch={handleToggleSearch} />}
			</Toggle>
		</Container>
	)
}

export default Header
