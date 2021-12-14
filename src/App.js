import React from 'react'

import Navbar from './components/Navbar'
import CardComponent from './components/Card'
import Jumbo from './components/Jumbo'
import Footer from './components/Footer'

import { Container, Row, Col } from 'react-bootstrap'
export default function App(){
  return(
    <>
      <Navbar/>
      <Jumbo/>
      <Container>
        <Row>
          <Col><CardComponent/></Col>
          <Col><CardComponent/></Col>
          <Col><CardComponent/></Col>
        </Row>
      </Container>
      <Footer/>
    </>

  )
}
