import React from 'react'
import { Col, Row } from 'react-bootstrap'
import SideBar from '../Components/SideBar'
import Job from '../Components/Job'
import Assemblies from '../Components/Assemblies'

function HomeAssemblies() {
  return (
    <>
    <Row style={{background:'#F3F5FD'}}>

      <Col sm={12} md={1} >
      <SideBar/>
      </Col>

      <Col sm={12} md={4} >
       
        <Assemblies/>
      
      </Col>

      <Col sm={12} md={7}>
      <Job/>
      </Col>

    </Row>
</>
  )
}

export default HomeAssemblies