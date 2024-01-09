import React from 'react'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { MdEdit } from "react-icons/md";


function AddAssemblies(props) {
  return (
    <>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Body className='p-3'>
          <h4 className='fw-bold text-center mb-5'>Add Assembly to the Project</h4>
          <div className='d-flex'>
            <h6 className='text-secondary me-5'>Assembly Name</h6>
            <h6>2x4” Drop-In T-Bar (1/2” Flex)</h6>
          </div>

          <div className='d-flex justify-start mt-4 gap-5'>
            <div className="d-flex align-items-centerrounded w-25">
              <h6 className='text-secondary me-3'>Count</h6>
              <input className='form-control text-muted' placeholder="1250" />
            </div>
            <div className="d-flex align-items-center  rounded w-25">
              <h6 className='text-secondary me-3'>Length</h6>
              <input className='form-control text-muted' placeholder="1250" />
            </div>
          </div>

          {/* table */}
          <h6 className='text-secondary me-5 mt-3'>Assembly Description</h6>
          <div style={{ background: '#EEEEEE', borderRadius: '1rem' }} className='p-4 mt-3'>
            <div className="container d-flex align-items-center gap-5 text-center">
              <p className='text-secondary'>SI NO</p>
              <p className='text-secondary me-4'>Description</p>
              <p className='text-secondary'>Quantity</p>
              <p className='text-secondary'>Fct 1</p>
              <p className='text-secondary'>Fct 2</p>
              <p className='text-secondary'>Catelog Number</p>
            </div>
            <div className="border-bottom container d-flex align-items-center p-2 gap-5 text-center">
              <h6 className=''>SI NO</h6>
              <h6 className=' me-4'>4x1 1/2” 1/2” KO</h6>
              <h6 className='me-5'>2</h6>
              <h6 className='me-5'>2</h6>
              <h6 className=''>2</h6>
              <h6 className=''>32321AA15</h6>
              <MdEdit className='ms-auto' style={{ fontSize: '1.5rem' }} />
            </div>
            <div className="container d-flex align-items-center p-2 gap-5 text-center">
              <h6 className=''>SI NO</h6>
              <h6 className=' me-1'>4” Blank Cover</h6>
              <h6 className='me-5'>3</h6>
              <h6 className='me-5'>3</h6>
              <h6 className=''>3</h6>
              <h6 className=''>455641JJH</h6>
              <MdEdit className='ms-auto' style={{ fontSize: '1.5rem' }} />
            </div>
          </div>

          <div className='d-flex gap-5 mt-3 align-items-center justify-content-center'>
            <Button onClick={props.onHide} variant="outline-primary" style={{ border: '1px solid blue',color:'blue' }}>Cancel</Button>
            <Button style={{ background: '#006AFF', border: 'blue', width: '5.5rem' }}>Add</Button>
          </div>
        </Modal.Body>

      </Modal>
    </>
  )
}
<input className='form-control text-muted' placeholder="Search Projects" />


export default AddAssemblies