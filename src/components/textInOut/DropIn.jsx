import React from 'react'
import { Col, Card } from 'react-bootstrap'
import Dropzone from '../Dropzone/Dropzone'

export default function DropIn() {
  return (
    <Col className="divider">
    <Card>
      <Card.Body>
        <Dropzone/>
      </Card.Body>
    </Card>
  </Col>
  )
}
