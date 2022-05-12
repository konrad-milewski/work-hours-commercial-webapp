import React from 'react'
import { Nav } from 'react-bootstrap'

export default function Navigation() {
  return (
    <div className='scrollme'>
      <Nav variant="tabs"  defaultActiveKey="/home">
    <Nav.Item>
      <Nav.Link href="#">Option</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link eventKey="link-1">Option</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link eventKey="disabled" >
      Option
      </Nav.Link>
    </Nav.Item>
  </Nav>
    </div>
    
  )
}
