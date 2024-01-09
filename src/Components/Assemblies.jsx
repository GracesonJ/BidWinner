import React from 'react'
import { CiSearch } from "react-icons/ci";
import { ImArrowLeft } from "react-icons/im";
import { Link } from 'react-router-dom';
import { IoIosAddCircle } from "react-icons/io";
import AddAssemblies from './AddAssemblies';

function Assemblies() {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <>
    {/* modal */}
    <AddAssemblies
        show={modalShow}
        onHide={() => setModalShow(false)}
      />

      {/* heading */}
      <div className="d-flex mt-4 mb-3">
        <Link to={'/homesub'}><ImArrowLeft className='mt-2 me-2' style={{color:'black'}}/></Link>
        <h4 style={{ fontWeight: '600' }}>Assemblies</h4>
        <div className="ms-auto d-flex align-items-center  rounded w-50">
          <CiSearch style={{ width: '2.5rem' }} />
          <input className='form-control text-muted' placeholder="Search Assemblies" />
        </div>
      </div>

      {/* table */}
      <div className='card'>
        <div className="d-flex align-items-center p-2 mt-2">
          <h6 className='text-secondary me-4'>SL NO</h6>
          <h6 className='text-secondary'>Name</h6>
          <h6 className='ms-auto text-secondary me-5'>Type</h6>
        </div>
        <div onClick={() => setModalShow(true)} className="border d-flex align-items-center p-2">
          <h6 className=' ms-1 me-5 mt-1'>1</h6>
          <h6 className='ms-3 mt-1'>2x4” Drop-In T-Bar (1/2” Flex)</h6>
          <h6 className='ms-auto me-4 mt-1'>C</h6>
          <IoIosAddCircle  className='me-4' style={{ color: 'green' ,fontSize:'1.6rem'}} />
        </div>
        <div onClick={() => setModalShow(true)} className="border d-flex align-items-center p-2">
          <h6 className=' ms-1 me-5 mt-1'>2</h6>
          <h6 className='ms-3 mt-1'>1x4” Drop-In T-Bar (1/2” Flex)</h6>
          <h6 className='ms-auto me-4 mt-1'>C</h6>
          <IoIosAddCircle  className='me-4' style={{ color: 'green' ,fontSize:'1.6rem'}} />
        </div>
        <div onClick={() => setModalShow(true)} className="border d-flex align-items-center p-2">
          <h6 className=' ms-1 me-5 mt-1'>3</h6>
          <h6 className='ms-3 mt-1'>2x4” Drop-In T-Bar (14/2” BX)</h6>
          <h6 className='ms-auto me-4 mt-1'>C</h6>
          <IoIosAddCircle  className='me-4' style={{ color: 'green' ,fontSize:'1.6rem'}} />
        </div>
        <div onClick={() => setModalShow(true)} className="border d-flex align-items-center p-2">
          <h6 className=' ms-1 me-5 mt-1'>4</h6>
          <h6 className='ms-3 mt-1'>1x4” Drop-In T-Bar (14/2” BX)</h6>
          <h6 className='ms-auto me-4 mt-1'>C</h6>
          <IoIosAddCircle  className='me-4' style={{ color: 'green' ,fontSize:'1.6rem'}} />
        </div>
        <div onClick={() => setModalShow(true)} className="border d-flex align-items-center p-2">
          <h6 className=' ms-1 me-5 mt-1'>5</h6>
          <h6 className='ms-3 mt-1'>2x2” Drop-In T-Bar (14/2” BX)</h6>
          <h6 className='ms-auto me-4 mt-1'>C</h6>
          <IoIosAddCircle  className='me-4' style={{ color: 'green' ,fontSize:'1.6rem'}} />
        </div>
        <div onClick={() => setModalShow(true)} className="border d-flex align-items-center p-2">
          <h6 className=' ms-1 me-5 mt-1'>6</h6>
          <h6 className='ms-3 mt-1'>2x4” Drop-In T-Bar (12/2” BX)</h6>
          <h6 className='ms-auto me-4 mt-1'>C</h6>
          <IoIosAddCircle  className='me-4' style={{ color: 'green' ,fontSize:'1.6rem'}} />
        </div>
        <div onClick={() => setModalShow(true)} className="border d-flex align-items-center p-2">
          <h6 className=' ms-1 me-5 mt-1'>7</h6>
          <h6 className='ms-3 mt-1'>1x4” Drop-In T-Bar (12/2” BX)</h6>
          <h6 className='ms-auto me-4 mt-1'>C</h6>
          <IoIosAddCircle className='me-4' style={{ color: 'green' ,fontSize:'1.6rem'}} />
        </div>
        <div onClick={() => setModalShow(true)} className="border d-flex align-items-center p-2">
          <h6 className=' ms-1 me-5 mt-1'>8</h6>
          <h6 className='ms-3 mt-1'>2x4” Drop-In T-Bar (12/2” BX)</h6>
          <h6 className='ms-auto me-4 mt-1'>C</h6>
          <IoIosAddCircle className='me-4' style={{ color: 'green' ,fontSize:'1.6rem'}} />
        </div>
        <div onClick={() => setModalShow(true)} className="border d-flex align-items-center p-2">
          <h6 className=' ms-1 me-5 mt-1'>9</h6>
          <h6 className='ms-3 mt-1'>1x4” Drop-In T-Bar (14/2” Teck)</h6>
          <h6 className='ms-auto me-4 mt-1'>C</h6>
          <IoIosAddCircle className='me-4' style={{ color: 'green' ,fontSize:'1.6rem'}} />
        </div>
        <div onClick={() => setModalShow(true)} className="border d-flex align-items-center p-2">
          <h6 className=' ms-1 me-5 mt-1'>10</h6>
          <h6 className='ms-3 mt-1'>1x4” Drop-In T-Bar (12/2” Teck)</h6>
          <h6 className='ms-auto me-4 mt-1'>C</h6>
          <IoIosAddCircle className='me-4' style={{ color: 'green' ,fontSize:'1.6rem'}} />
        </div>
        <div className="border d-flex align-items-center p-4">
         
        </div>
        
      </div>
      
    </>
  )
}

export default Assemblies