import React from 'react'

import { Jumbotron, Button } from 'react-bootstrap'

export default function Jumbo(){
	return(
		<Jumbotron>
			<h1>Hello visitors of my portfolio!</h1>
			<p>This is an About Me Page where I share about my latest hobbies and interesting things I want to talk about</p>
			<Button variant = "primary">Click this to learn more about me!</Button>
		</Jumbotron>


	)
}
