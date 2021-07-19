import React, { useRef, useState } from 'react'
import './fl.css';
import { Col, Card, Button } from 'react-bootstrap'

export default function TextIn() {
  // const [input, setInput] = useState('')

  const convertFormat = () => {
    let input = useRef(null)
  }
  
  return (
    <Col className="divider">
    <p>paste</p>
    <Card>
      <Card.Body>
        <textarea id="textIn"></textarea>
      </Card.Body>
      <Card.Footer>
        <Button onClick={convertFormat()} variant="dark">Add First Letters</Button>
      </Card.Footer>
    </Card>
  </Col>
  )
}
