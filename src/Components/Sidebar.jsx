import React from 'react'
import { BsCardText } from "react-icons/bs";
import { RiArrowGoBackLine } from "react-icons/ri";



function SideBar() {
  return (
    <div className='side-bar'>
        <div className="border d-flex text-center row align-items-center justify-content-center p-2 " style={{background:'#006AEC'}}>
            <RiArrowGoBackLine style={{color:'white',fontSize:'1.5rem'}}/>
            <small className='text-white'>back to job</small>
        </div>
        <div className="border d-flex text-center row align-items-center justify-content-center text-primary  p-2  bg-white">
            <BsCardText style={{color:'grey',fontSize:'1.5rem'}}/>
            <small className='text-muted'>Notes</small>
        </div>
        <div className="border d-flex text-center row align-items-center justify-content-center text-primary  p-2  bg-white">
                <BsCardText style={{color:'grey',fontSize:'1.5rem'}}/>
            <small className='text-muted'>Take off</small>
        </div>
        <div className="border d-flex text-center row align-items-center justify-content-center text-primary  p-2  bg-white">
            <BsCardText style={{color:'grey',fontSize:'1.5rem'}}/>
            <small className='text-muted'>Extension</small>
        </div>
        <div className="border d-flex text-center row align-items-center justify-content-center text-primary  p-2  bg-white">
            <BsCardText style={{color:'grey',fontSize:'1.5rem'}}/>
            <small className='text-muted'>Dilb</small>
        </div>
        <div className="border d-flex text-center row align-items-center justify-content-center text-primary  p-2  bg-white">
            <BsCardText style={{color:'grey',fontSize:'1.5rem'}}/>
            <small className='text-muted'>inclb</small>
        </div>
        <div className="border d-flex text-center row align-items-center justify-content-center text-primary  p-2  bg-white">
            <BsCardText style={{color:'grey',fontSize:'1.5rem'}}/>
            <small className='text-muted'>Lbfac</small>
        </div>
        <div className="border d-flex text-center row align-items-center justify-content-center text-primary  p-2  bg-white">
            <BsCardText style={{color:'grey',fontSize:'1.5rem'}}/>
            <small className='text-muted'>Lbesc</small>
        </div>
        <div className="border d-flex text-center row align-items-center justify-content-center text-primary  p-2  bg-white">
            <BsCardText style={{color:'grey',fontSize:'1.5rem'}}/>
            <small className='text-muted'>IndLB</small>
        </div>
        <div className="border d-flex text-center row align-items-center justify-content-center text-primary  p-2  bg-white">
            <BsCardText style={{color:'grey',fontSize:'1.5rem'}}/>
            <small className='text-muted'>sbcon</small>
        </div>
        <div className="border d-flex text-center row align-items-center justify-content-center text-primary  p-2  bg-white">
            <BsCardText style={{color:'grey',fontSize:'1.5rem'}}/>
            <small className='text-muted'>Gen Exp</small>
        </div>
        
    </div>
    
  )
}

export default SideBar