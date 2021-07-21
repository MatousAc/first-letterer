import React from 'react'
import { Nav } from 'react-bootstrap'
import SimpleModal from "../SimpleModal";
import Embolden from '../Embolden/Embolden';
import './navbar.css'


export default function Navbar() {
  return (
    <Nav>
      <Nav.Item>
        <SimpleModal>
          <Embolden />
        </SimpleModal>
      </Nav.Item>
    </Nav>
  )
}
