import React from 'react'
import styled from 'styled-components'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Breed from './Breed'

const Container = styled.main`
	margin: 0 auto;
	margin-bottom: 2em;
`
const List = styled.div`
	display: flex;
	flex-wrap: row wrap;
	div {
		flex: 1;
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
	}
`

export default () => (
	<Router>
		<Container>
			<div>A</div>
			<hr />
			<List>
				<div>
					<p>
						<Link to='/breed'>breed 1</Link>
					</p>
				</div>
				<div>
					<p>breed 2</p>
				</div>
				<div>
					<p>breed 3</p>
				</div>
			</List>
		</Container>
		<Switch>
			<Route path='/breed' component={Breed} />
		</Switch>
	</Router>
)
