import React from 'react'

import { Navbar, Nav, Container } from 'react-bootstrap' 

export default function NavbarComponent(){
	return(
			<Navbar bg="dark" variant="dark">
		    <Container>
		      <Navbar.Brand href="#home">
		        <img
		          alt=""
		          src="/logo192.png"
		          width="30"
		          height="30"
		          className="d-inline-block align-top"
		        />{' '}
		      React Bootstrap
		      </Navbar.Brand>
		      <Nav className = "mr-auto">
				<Nav.Link href = "#home">Home</Nav.Link>
				<Nav.Link href = "#link">Link</Nav.Link>
			</Nav>
		    </Container>
		  </Navbar>
	)
}
