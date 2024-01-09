import React from 'react'
import { ImArrowRight } from "react-icons/im";
import { CiSearch } from "react-icons/ci";
import { ImArrowLeft } from "react-icons/im";
import { Link } from 'react-router-dom';



function Categories() {
  return (
    <>
      <div className="d-flex mt-4 mb-3">
      <ImArrowLeft className='mt-2 me-2'/>
        <h4 style={{fontWeight:'600'}}>Categories</h4>
        <div className="ms-auto d-flex align-items-center  rounded w-50">
        <CiSearch style={{ width: '2.5rem' }} />
                    <input className='form-control text-muted' placeholder="Search Categories" />
        </div>
      </div>
      <div className='card'>
        <div className="d-flex align-items-center p-2 mt-2">
            <h6 className='text-secondary me-4'>SL NO</h6>
            <h6 className='text-secondary'>Name</h6>
            <h6 className='ms-auto text-secondary me-5'>Type</h6>
        </div>
        <Link to={'/homesub'} style={{textDecoration:'none',color:'black'}}>
            <div className="border d-flex align-items-center p-2">
                <h6 className=' ms-1 me-5 mt-1'>1</h6>
                <h6 className='ms-3 mt-1'>Fixture</h6>
                <h6 className='ms-auto me-4 mt-1'>C</h6>
                <ImArrowRight className='me-4' style={{color:'blue'}}/>
            </div>
        </Link>
        <Link to={'/homesub'} style={{textDecoration:'none',color:'black'}}>
            <div className="border d-flex align-items-center p-2">
                <h6 className=' ms-1 me-5 mt-1'>2</h6>
                <h6 className='ms-3 mt-1'>Switches</h6>
                <h6 className='ms-auto me-4 mt-1'>C</h6>
                <ImArrowRight className='me-4' style={{color:'blue'}}/>
            </div>
        </Link>
        <Link to={'/homesub'} style={{textDecoration:'none',color:'black'}}>
            <div className="border d-flex align-items-center p-2">
                <h6 className=' ms-1 me-5 mt-1'>3</h6>
                <h6 className='ms-3 mt-1'>Receptacles</h6>
                <h6 className='ms-auto me-4 mt-1'>C</h6>
                <ImArrowRight className='me-4' style={{color:'blue'}}/>
            </div>
        </Link>
        <Link to={'/homesub'} style={{textDecoration:'none',color:'black'}}>
            <div className="border d-flex align-items-center p-2">
                <h6 className=' ms-1 me-5 mt-1'>4</h6>
                <h6 className='ms-3 mt-1'>Computer & Phone</h6>
                <h6 className='ms-auto me-4 mt-1'>C</h6>
                <ImArrowRight className='me-4' style={{color:'blue'}}/>
            </div>
        </Link>
        <Link to={'/homesub'} style={{textDecoration:'none',color:'black'}}>
            <div className="border d-flex align-items-center p-2">
                <h6 className=' ms-1 me-5 mt-1'>5</h6>
                <h6 className='ms-3 mt-1'>Fire Alarm</h6>
                <h6 className='ms-auto me-4 mt-1'>C</h6>
                <ImArrowRight className='me-4' style={{color:'blue'}}/>
            </div>
        </Link>
        <Link to={'/homesub'} style={{textDecoration:'none',color:'black'}}>
            <div className="border d-flex align-items-center p-2">
                <h6 className=' ms-1 me-5 mt-1'>5</h6>
                <h6 className='ms-3 mt-1'>EMT (branch)</h6>
                <h6 className='ms-auto me-4 mt-1'>C</h6>
                <ImArrowRight className='me-4' style={{color:'blue'}}/>
            </div>
        </Link>
        <Link to={'/homesub'} style={{textDecoration:'none',color:'black'}}>
            <div className="border d-flex align-items-center p-2">
                <h6 className=' ms-1 me-5 mt-1'>6</h6>
                <h6 className='ms-3 mt-1'>EMT (Feeder)</h6>
                <h6 className='ms-auto me-4 mt-1'>C</h6>
                <ImArrowRight className='me-4' style={{color:'blue'}}/>
            </div>
        </Link>
        <Link to={'/homesub'} style={{textDecoration:'none',color:'black'}}>
            <div className="border d-flex align-items-center p-2">
                <h6 className=' ms-1 me-5 mt-1'>7</h6>
                <h6 className='ms-3 mt-1'>GRC (branch)</h6>
                <h6 className='ms-auto me-4 mt-1'>C</h6>
                <ImArrowRight className='me-4' style={{color:'blue'}}/>
            </div>
        </Link>
        <Link to={'/homesub'} style={{textDecoration:'none',color:'black'}}>
            <div className="border d-flex align-items-center p-2">
                <h6 className=' ms-1 me-5 mt-1'>8</h6>
                <h6 className='ms-3 mt-1'>GRC (Feeder)</h6>
                <h6 className='ms-auto me-4 mt-1'>C</h6>
                <ImArrowRight className='me-4' style={{color:'blue'}}/>
            </div>
        </Link>
        <Link to={'/homesub'} style={{textDecoration:'none',color:'black'}}>
            <div className="border d-flex align-items-center p-2">
                <h6 className=' ms-1 me-5 mt-1'>9</h6>
                <h6 className='ms-3 mt-1'>Cable (Branch)</h6>
                <h6 className='ms-auto me-4 mt-1'>C</h6>
                <ImArrowRight className='me-4' style={{color:'blue'}}/>
            </div>
        </Link>
        <Link to={'/homesub'} style={{textDecoration:'none',color:'black'}} >
        <div className="border d-flex align-items-center p-2">
            <h6 className=' ms-1 me-5 mt-1'>10</h6>
            <h6 className='ms-3 mt-1'>Cable (Feeder)</h6>
            <h6 className='ms-auto me-4 mt-1'>C</h6>
            <ImArrowRight className='me-4' style={{color:'blue'}}/>
        </div>
        </Link>
        <div className="border d-flex align-items-center p-3">     
        </div>
      </div>
    </>
  )
}

export default Categories