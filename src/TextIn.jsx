import React, { useState } from 'react'
import { Col, Card, Button } from 'react-bootstrap'
import './fl.css';

export default function TextIn() {
  const [input, setInput] = useState('')
  
  function updateInput(e) {
    setInput(e.target.value)
  }
  
  function convertFormat() {
    console.log(input.substring(0, 140))

  }
  
  return (
    <Col className="divider">
    <p>paste</p>
    <Card>
      <Card.Body>
        <textarea id="textIn" onChange={updateInput}>{input}</textarea>
      </Card.Body>
      <Card.Footer>
        <Button onClick={convertFormat} variant="dark">Add First Letters</Button>
      </Card.Footer>
    </Card>
  </Col>
  )
}
