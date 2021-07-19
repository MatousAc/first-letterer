import React from 'react'
import './fl.css';
import { Col, Card, Button } from 'react-bootstrap'

function dq(s) {return document.querySelector(s)}

export default function TextOut() {
  function copyText() {
    let outText = dq("#textOut").value
    navigator.clipboard.writeText(outText)
  }
  
  return (
    <Col className="divider">
    <p>copy</p>
    <Card>
      <Card.Body>
        <textarea id="textOut"></textarea>
      </Card.Body>
      <Card.Footer>
        <Button variant='dark' onClick={copyText}>Copy Text</Button>
      </Card.Footer>
    </Card>
  </Col>
)
}
