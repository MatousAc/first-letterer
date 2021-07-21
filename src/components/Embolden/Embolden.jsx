import React from 'react'
import { Container, Row, Col, Button, Card } from 'react-bootstrap'
import CopyButton from '../Buttons/CopyButton'
import './embolden.css'

export default function Embolden() {
  function makeBold(e) {
    let text = e.target.innerHTML
  }
  
  return (
    <Container
    style = {{
      display: 'flex',
      height: '100%',
      width: '100%',
      alignItems: 'center'
    }}
    >
      <Row
      style= {{
        width: '100%'
      }}
      >

        <Col>
          <Card>
            <Card.Body>
              <div onChange={makeBold} id="emboldenIn" contentEditable>
                <p><b>1</b> Paste Text Here</p>
              </div>

            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card>
            <Card.Body>
              <div id="emboldenOut" contentEditable>
                
              </div>

            </Card.Body>
            <Card.Footer>
              <CopyButton />
            </Card.Footer>
          </Card>
        </Col>

      </Row>
    </Container>
  )
}
