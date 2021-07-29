import React from 'react'
import { Col, Card } from 'react-bootstrap'
import RedButton from '../Buttons/RedButton'
import { dq } from '../Functionality/Helpers'
import './card.css'

export default function TextOut() {
  function copyText() {
    let text = dq("#textOut").value
    navigator.clipboard.writeText(text)
  }
  
  return (
    <Col className="divider">
    <p>copy</p>
      <Card>
        <Card.Body>
          <textarea id="textOut"></textarea>
        </Card.Body>
        <Card.Footer>
          <RedButton onclick={copyText}>
            Copy Text
          </RedButton>
        </Card.Footer>
      </Card>
    </Col>
  )
}
