import React from 'react'
import { Col, Card } from 'react-bootstrap'
import Button from '@material-ui/core/Button';
import './inNout.css';
import CopyButton from '../Buttons/CopyButton';


function dq(s) {return document.querySelector(s)}

export default function TextOut() {
  return (
    <Col className="divider">
    <p>copy</p>
      <Card>
        <Card.Body>
          <textarea id="textOut"></textarea>
        </Card.Body>
        <Card.Footer>
          <CopyButton text={dq("#textOut").value}/>
        </Card.Footer>
      </Card>
    </Col>
  )
}
