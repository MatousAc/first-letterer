import React, { useState } from 'react'
import { Col, Card } from 'react-bootstrap'
import RedButton from './Buttons/RedButton.jsx';
import Dropzone from './Dropzone/Dropzone'
import './textInOut/inNout.css';

/// helper functions
import { 
  isChapter, 
  isHeader, 
  cleanPhrases, 
  cleanWords, 
  setNewVerseFlag, 
  parseStuff,
  dq
} from './Functionality/Helpers'

export default function DropIn() {
  function downloadFiles() {
    console.log("downloadingFiles")
  }
  
  return (
    <Col className="divider">
    <Card>
      <Card.Body>
        {/* <textarea id="textIn" onChange={updateInput}>{input}</textarea> */}
        {/* <div id="textIn" contentEditable>paste text here</div> */}
        <Dropzone/>
      </Card.Body>
      <Card.Footer>
        <RedButton 
          onclick={downloadFiles}
        >
          Download
        </RedButton>
      </Card.Footer>
    </Card>
  </Col>
  )
}
