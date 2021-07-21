import React from 'react'
import { Col, Card } from 'react-bootstrap'
import Button from '@material-ui/core/Button';
import './fl.css';
import CopyButton from '../Buttons/CopyButton';


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
        <CopyButton function={copyText}/>
      </Card.Footer>
    </Card>
  </Col>
)
}
