import React from 'react'
import { Col, Card } from 'react-bootstrap'
import Button from '@material-ui/core/Button'
import CopyButton from '../Buttons/CopyButton'
import './inNout.css'


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
          <CopyButton text={dq("#textOut")?.value}/>
        </Card.Footer>
      </Card>
    </Col>
  )
}
