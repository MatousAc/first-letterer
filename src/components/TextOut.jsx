import React from 'react'
import { Col, Card } from 'react-bootstrap'
import Button from '@material-ui/core/Button';
import './fl.css';


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
        <Button variant='outlined' onClick={copyText}>Copy Text</Button>
      </Card.Footer>
    </Card>
  </Col>
)
}
