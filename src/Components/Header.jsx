import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Dropdown from 'react-bootstrap/Dropdown';
import Avatar from '../Images/avatar.jpeg'
import { LuBellDot } from "react-icons/lu";

function Header() {
    return (
        <>
            <Navbar expand="lg" className="m-0 p-0 header-bar" style={{ background: '#243263'}}>
                <Container fluid >
                    <Navbar.Brand href="#" className='p-2 ms-3' style={{ color: 'white', fontWeight: 'bold', fontSize: '1.25rem', border: '1px solid', fontFamily: "revert" }}>BID WINNER</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '150px' }}
                            navbarScroll
                        >
                            <Nav.Link href="#action1" style={{ color: 'white' }} className='ms-4'>Dashboard</Nav.Link>
                            <Nav.Link href="#action1" style={{ color: 'white' }} className='ms-4'>Jobs</Nav.Link>
                            <Nav.Link href="#action1" style={{ color: 'white' }} className='ms-4'>Calendar</Nav.Link>
                            <Nav.Link href="#action1" style={{ color: 'white' }} className='ms-4'>Cast Catalog</Nav.Link>
                            <Nav.Link href="#action1" style={{ color: 'white' }} className='ms-4'>Database</Nav.Link>
                            <Nav.Link href="#action1" style={{ color: 'white' }} className='ms-4'>Tutorials</Nav.Link>
    
                        </Nav>
    
                        <div className='footer-bottom d-flex'>
                            <Dropdown className='me-3 d-flex flex-row p-1 m-2' style={{ border: '1px solid white', borderRadius: '5px', background: '#243263', width: 'fit-content' }} >
                                <div className='align-self-center text-light p-1'>
                                    <h6 className='m-0 p-0 text-end'> Johnson J</h6>
                                    <small className='m-0 p-0'> johnsonj@gmail.com</small>
                                </div>
                                <div className="p-2 mt-1">
                                <img
                                    className='align-self-center'
                                    style={{ borderRadius: "50%" }}
                                    width="40"
                                    src={Avatar} alt="" />
                                </div>
                                <Dropdown.Toggle className='p-3' style={{ background: '#243263' }}>
        
                                </Dropdown.Toggle>
        
                                <Dropdown.Menu style={{ zIndex: '1000' }}>
                                    <Dropdown.Item href="#/action-1">Add Account</Dropdown.Item>        
                                </Dropdown.Menu>
                            </Dropdown>
        
                            <Nav>
                                <LuBellDot className='mt-4' style={{ color: 'white', fontSize: '2rem', marginRight: '2rem' }} />
                            </Nav>
                        </div>
                    </Navbar.Collapse>
    
                </Container>
            </Navbar>
        </>
    )
}

export default Header