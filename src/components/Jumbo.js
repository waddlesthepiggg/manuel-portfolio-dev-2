import React from 'react'

import { Jumbotron, Button } from 'react-bootstrap'

export default function Jumbo(){
	return(
		<Jumbotron>
			<h1>Hello visitors of my portfolio!</h1>
			<p>This is an About Me Page where I share here about my latest hobbies and things I want to talk about that are interesting</p>
			<Button variant = "primary">Click this to learn more!</Button>
		</Jumbotron>


	)
}
