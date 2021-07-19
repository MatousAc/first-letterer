import React from 'react'
import './fl.css';
import { Col, Card, Button } from 'react-bootstrap'

function dq(s) {return document.querySelector(s)}

export default function TextOut() {
  function copyText() {
    console.log('calling')
    let outText = dq("#textOut").innerHTML
    outText = outText.replace(/[TABGOESHERE]/g,"\t")
    console.log(outText)
  }
  
  return (
    <Col className="divider">
    <p>Copy</p>
    <Card>
      <Card.Body>
        <div contentEditable="true" id="textOut"></div>
      </Card.Body>
      <Card.Footer>
        <Button variant='dark' onClick={copyText}>Copy Text</Button>
      </Card.Footer>
    </Card>
  </Col>
)
}
