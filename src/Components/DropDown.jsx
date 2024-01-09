import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
function DropDown() {
    return (
        <>
            <Dropdown >
                <Dropdown.Toggle variant="light" id="dropdown-basic" size='sm'>
                    Choose Level
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Medium</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Low</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </>
    )
}

export default DropDown