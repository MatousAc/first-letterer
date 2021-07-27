import React, { useState } from 'react'
import { Col, Card } from 'react-bootstrap'
import RedButton from './Buttons/RedButton.jsx';
import Dropzone from './Dropzone/Dropzone'
import './textInOut/inNout.css';
import {
  addFirstLetters,
  createDocFrom
} from './Functionality/Functionality'

/// helper functions
import { 
  needsConverting,
  cleanPhrases, 
  dq
} from './Functionality/Helpers'


export default function DropIn() {
  function downloadFiles() {
    return true
  }
  
  function convertFormat() {
    /// take the entire text and split up the lines
    let phrases = [] //input.split('\n')
    /// clean spaces out from the beginnings of the phrases
    phrases = cleanPhrases(phrases)
    
    /// redefine the array using each line
    phrases = phrases.map(phrase => {
      ///    if it's part of a verse,  add first letters, otherwise don't
      return needsConverting(phrase) ? addFirstLetters(phrase) : phrase
    })

    // let output = phrases.join('\n')
    // document.querySelector("#textOut").value = output
    // return phrases
    createDocFrom(phrases)
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
