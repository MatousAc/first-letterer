import React from 'react'
import './fl.css';
import { Col, Card, Button } from 'react-bootstrap'

export default function TextOut() {
  return (
    <Col className="divider">
    <p>copy</p>
    <Card>
      <Card.Body>
        <textarea id="textOut"></textarea>
      </Card.Body>
    </Card>
  </Col>
)
}
