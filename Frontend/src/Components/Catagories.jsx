import React from 'react'
import Form from 'react-bootstrap/Form';
import Table from './Table';

function Catagories() {
  return (
    <>
    <div className="mx-2 mt-4">
        <div className="d-flex justify-content-around mt-4">
            <div className="mt-1">
                <a href=""><i class="fa-solid fa-circle-left" style={{color: "#2c2d30"}}></i></a>
            </div>
            <div className="">
                <h4>Catagories</h4>
            </div>
            <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search Catagories"
                  className="me-2"
                  aria-label="Search"
                />
            </Form>
        </div>
        <div className="table">
            <Table/>
        </div>
        
    </div>
    </>
  )
}

export default Catagories