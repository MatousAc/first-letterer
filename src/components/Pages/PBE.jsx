import React from 'react'
import { Col, Card } from 'react-bootstrap'
import Dropzone from '../Dropzone/Dropzone'

export default function DropIn() {
  return (
    <Col className="divider">
    <Card
    style = {{
      width: 'max-content',
      maxWidth: '90vw',
      margin: 'auto'
    }}
    >
      <Card.Body
      style={{
        padding: '1.4rem 2rem'
      }}
      >
        <Dropzone/>
      </Card.Body>
    </Card>
  </Col>
  )
}
