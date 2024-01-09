import React from 'react'
import Button from 'react-bootstrap/Button';
import CheckBox from './CheckBox';
import DropDown from './DropDown';
import { CiSearch } from "react-icons/ci";
import Dropdown from 'react-bootstrap/Dropdown';
import { MdOutlineArrowDownward } from "react-icons/md";
import { TiArrowSortedDown } from "react-icons/ti";
import { MdPlayArrow } from "react-icons/md";
import { FaTrash } from "react-icons/fa6";

function Job() {
    return (
        <>
            <div className="d-flex p-3 mt-3">
                <h4 className='fw-bold'>Job</h4>
                <div className="ms-auto"><span className='me-2 text-secondary'>Quote status</span><Button variant="success" size='sm' style={{borderRadius:'5rem',background:'green'}}>Accepted <TiArrowSortedDown /></Button></div>
            </div>

            {/* top section */}
            <div className='job-top'>
                <div className="border d-flex flex-column align-items-center text-primary bg-white rounded p-3 me-3">
                    <div className='d-flex w-100'>
                        <p className='text-secondary me-2'>Job Name</p>
                        <h6 className='ms-5 fw-bold'>Test Project 1</h6>
                        <Button className='ms-auto'  size='sm' style={{height:'2rem',background:'#006AEC',border:'blue'}}>Job details</Button>
                    </div>
                    <div className='d-flex w-100'>
                        <p className='text-secondary'>Job Number</p>
                        <h6 className='ms-5 fw-bold'>#hjabsdka</h6>
                        <Button className='ms-auto' size='sm' style={{height:'2rem',background:'#006AEC',border:'blue'}}>Button one</Button>
                    </div>
                    <div className='d-flex w-100 '>
                        <p className='text-secondary me-5'>Unit</p>
                        <p className='ms-5 me-2 text-muted'>Metric</p>
                        <CheckBox />
                        <p className='text-muted'>US</p>
                        <Button className='ms-auto' size='sm' style={{height:'2rem',color:'blue',background:'white',border:'none'}}>Button two</Button>
                    </div>
                    <div className='d-flex w-100'>
                        <h6 className='text-secondary me-4'>Difficulty level</h6>
                        <DropDown />
                    </div>
                </div>
            </div>
            {/* center section */}

            <div className='d-flex mt-4 gap-4'>

                <div className="d-flex align-items-center  rounded w-50">
                    <CiSearch style={{ width: '2.5rem' }} />
                    <input className='form-control text-muted' placeholder="Search Projects" />
                </div>
                <p className='text-secondary ms-4'>Sort by</p>
                <Dropdown>
                    <Dropdown.Toggle variant="light" id="dropdown-basic" size='sm'>
                        Name
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">Length</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Quantity</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>

                <Button variant="light" size='sm' className='ps-5 pe-5' style={{ color: 'blue' }}>Import <MdOutlineArrowDownward /></Button>

            </div>

            {/* bottum section */}

            <div className='job-bottom card mt-3'>
                <div className="d-flex align-items-center p-2">
                    <p className='text-secondary ms-5'>SL NO</p>
                    <p className='text-secondary ms-4'>Assembly Name</p>
                    <p className='ms-auto text-secondary me-5'>Lenght</p>
                    <p className='text-secondary' style={{marginRight:'10rem'}}>Quantity</p>
                </div>
                {/* content */}
                <div className="border d-flex align-items-center p-2 ">
                <MdPlayArrow />
                    <h6 className='mt-1 ms-5'>1</h6>
                    <h6 className='mt-1 ms-5'>2”x4” Drop-in T-Bar (1/2” Flex)</h6>
                    <h6 className='ms-auto mt-1' style={{marginRight:'5rem',color:'blue'}}>100 M</h6>
                    <h6 className='mt-1' style={{marginRight:'8rem',color:'blue'}}>-</h6>
                    <FaTrash className='me-5' style={{color:'blue'}}/>
                </div>
                <div className="border d-flex align-items-center p-2 ">
                <MdPlayArrow />
                    <h6 className='mt-1 ms-5'>2</h6>
                    <h6 className='mt-1 ms-5'>1”x4” Surface Fluor Fixt</h6>
                    <h6 className='ms-auto mt-1' style={{marginRight:'5rem',color:'blue'}}>-</h6>
                    <h6 className='mt-1' style={{marginRight:'8rem',color:'blue'}}>120</h6>
                    <FaTrash className='me-5' style={{color:'blue'}}/>
                </div>
                <div className="border d-flex align-items-center p-2 ">
                <MdPlayArrow />
                    <h6 className='mt-1 ms-5'>3</h6>
                    <h6 className='mt-1 ms-5'>1/2” EMT DC SS Connector</h6>
                    <h6 className='ms-auto mt-1' style={{marginRight:'5rem',color:'blue'}}>-</h6>
                    <h6 className='mt-1' style={{marginRight:'8rem',color:'blue'}}>270</h6>
                    <FaTrash className='me-5' style={{color:'blue'}}/>
                </div>
                <div className="border d-flex align-items-center p-2 ">
                <MdPlayArrow />
                    <h6 className='mt-1 ms-5'>4</h6>
                    <h6 className='mt-1 ms-5'>2”x4” Drop-in T-Bar (1” Flex)</h6>
                    <h6 className='ms-auto mt-1' style={{marginRight:'5rem',color:'blue'}}>1200 M</h6>
                    <h6 className='mt-1' style={{marginRight:'8rem',color:'blue'}}>-</h6>
                    <FaTrash className='me-5' style={{color:'blue'}}/>
                </div>
                <div className="border d-flex align-items-center p-2 ">
                <MdPlayArrow />
                    <h6 className='mt-1 ms-5'>5</h6>
                    <h6 className='mt-1 ms-5'>3” EMT DC SS Connector</h6>
                    <h6 className='ms-auto mt-1' style={{marginRight:'5rem',color:'blue'}}>-</h6>
                    <h6 className='mt-1' style={{marginRight:'8rem',color:'blue'}}>500</h6>
                    <FaTrash className='me-5' style={{color:'blue'}}/>
                </div>
                <div className="border d-flex align-items-center p-2 ">
                <MdPlayArrow />
                    <h6 className='mt-1 ms-5'>6</h6>
                    <h6 className='mt-1 ms-5'>2”x6” Surface Fluor Fixt</h6>
                    <h6 className='ms-auto mt-1' style={{marginRight:'5rem',color:'blue'}}>-</h6>
                    <h6 className='mt-1' style={{marginRight:'8rem',color:'blue'}}>500</h6>
                    <FaTrash className='me-5' style={{color:'blue'}}/>
                </div>
   
            </div>


        </>
    )
}

export default Job