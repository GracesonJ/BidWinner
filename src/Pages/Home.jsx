import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Categories from '../Components/Categories'
import SideBar from '../Components/SideBar'
import Job from '../Components/Job'


function Home() {

  return (
    <>
        <Row className='home' style={{background:'#F3F5FD'}}>

          <Col sm={12} md={1} >
            <SideBar/>
          </Col>

          <Col sm={12} md={4} >
           
            <Categories />
          
          </Col>

          <Col sm={12} md={7}>
            <Job/>
          </Col>

        </Row>
    </>
  )
}

export default Home