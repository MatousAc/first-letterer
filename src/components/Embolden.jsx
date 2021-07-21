import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'
import CopyButton from './CopyButton'
import Button from '@material-ui/core/Button';
import './embolden.css'

function dq(s) {return document.querySelector(s)}

export default function Embolden() {
  function makeBold() {
    let text = dq("#emboldenIn").innerHTML
    console.log(text)
    let output = text
    dq('#emboldenOut').innerHTML = output
    
  }
  
  return (
    <Container
    style = {{
      display: 'flex',
      height: '100%',
      width: '100%',
      alignItems: 'center',
      maxWidth: '90vw'
    }}
    >
      <Row
      style= {{
        width: '100%',
        // backgroundColor: 'white'
      }}
      >

        <Col>
          <Card>
            <Card.Body>
              <div id="emboldenIn" contentEditable>
                <p><b>1</b> Paste Text Here</p>
              </div>
            </Card.Body>
            <Card.Footer>
              <Button 
                variant='outlined'
                color='secondary'
                onClick={makeBold}
              >
                Make Bold
              </Button>
            </Card.Footer>
          </Card>
        </Col>

        <Col>
          <Card>
            <Card.Body>
              <div id="emboldenOut" contentEditable>
                
              </div>

            </Card.Body>
            <Card.Footer>
              <CopyButton text={dq("#emboldenOut").innerHTML}/>
            </Card.Footer>
          </Card>
        </Col>

      </Row>
    </Container>
  )
}
