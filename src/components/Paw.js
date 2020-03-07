import React, { useState } from 'react'
import styled from 'styled-components'
import Icon from '@iconify/react'
import pawIcon from '@iconify/icons-cil/paw'

const PawIcon = styled(Icon)`
	position: absolute;
	right: 2%;
	bottom: 2%;
	font-size: 1.6em;
  color: ${(props) => (props.clicked ? 'white' : 'rgba(0,0,0,.7)')};
`

const Paw = () => {
	const [ clicked, setClicked ] = useState(false)
	const handleClick = () => {
		setClicked(!clicked)
	}
	return (
		<div>
			<PawIcon icon={pawIcon} onClick={handleClick} clicked={clicked} />
		</div>
	)
}

export default Paw
