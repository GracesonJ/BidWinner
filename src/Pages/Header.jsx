import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function Header() {
  return (
    <>
        <Navbar expand="lg" style={{backgroundColor:"#2f2b66", color:"white"}} className="px-5">
      <Container fluid>
        <Navbar.Brand className='text-white border px-2' href="#">BID WINNER</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0 ps-4"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link className='text-white mx-3' href="#action1">Dashboard</Nav.Link>
            <Nav.Link className='text-white mx-3' href="#action2">Jobs</Nav.Link>
            <Nav.Link className='text-white mx-3' href="#action3">Calender</Nav.Link>
            <Nav.Link className='text-white mx-3' href="#action4">Cost Catalog</Nav.Link>
            <Nav.Link className='text-white mx-3' href="#action2">Database</Nav.Link>
            <Nav.Link className='text-white mx-3' href="#action3">Tutorial</Nav.Link>
          </Nav>
          <Nav className="me-auto" >
            <div className="border px-2 rounded d-flex justify-content-between">
                <div className="text-end mt-1">
                    <div className="fs-6 fw-bold">
                        Johnson J
                    </div>
                    <div className="fs-6">
                        johnsonj@gmail.com
                    </div>
                </div>
                <div className="img-fluid m-3">
                    <img width={"40px"} style={{borderRadius:"100px"}} src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?size=626&ext=jpg" alt="img" />
                </div>
                <div className="mt-3">
                <i class="fa-solid fa-caret-down" style={{color: "#ffffff"}}></i>
                </div>
            </div>
            <div className="ms-4 mt-4">
            <i class="fa-regular fa-bell" style={{color: "#ffffff"}}></i>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}
export default Header