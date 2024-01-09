import React from 'react'
import Sidebar from '../Components/Sidebar'
import Catagories from '../Components/Catagories'
import Job from '../Components/Job'
import Header from './Header'
import { Col, Row } from 'react-bootstrap'



function Home() {
  return (
    <>
    <Header/>
    <Row>
        <Col xs="auto">
            <Sidebar/>
        </Col>
        <Col sm={4}>
            <Catagories/>
        </Col>
        <Col>
            <Job/>
        </Col>
    </Row>
    </>
  )
}

export default Home