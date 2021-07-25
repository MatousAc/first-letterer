import React, { useState } from 'react'
import { Col, Card } from 'react-bootstrap'
import RedButton from '../Buttons/RedButton.jsx';
import Dropzone from '../Dropzone/Dropzone'
import './inNout.css';

/// helper functions
import { 
  isChapter, 
  isHeader, 
  cleanPhrases, 
  cleanWords, 
  setNewVerseFlag, 
  parseStuff,
  dq
} from '../Functionality/Helpers'

export default function TextIn() {
  const [input, setInput] = useState('')
  /// new verse flag

  function updateInput(e) {
    setInput(e.target.value)
  }

  function needsConverting(phrase) {
    // we don't need to convert headers
    if (isChapter(phrase)||isHeader(phrase)) return false
    
    /// if there is an empty string, this must be the break between verses
    setNewVerseFlag(phrase)
    if (phrase === "" ) return false

    return true
  }

  function convert(phrase) {  
    let words = phrase.split(' ')
    
    words = cleanWords(words)
    let first_letters = words.map(word => {
      /// get first letter, capitalize it
      return isNaN(word) ? word.substring(0, 1).toUpperCase() : `${word}`
    })
    
    /// return the phrase separated from first letters with a tab
    /// and join the letters by four spaces
    return `${phrase}\t${first_letters.join('    ')}`
  }
  
  function convertFormat() {
    console.log("Converting: ")
    
    // /// take the entire text and split up the lines
    // let phrases = input.split('\n')
    // /// clean spaces out from the beginnings of the phrases
    // phrases = cleanPhrases(phrases)
    
    // /// redefine the array using each line
    // phrases = phrases.map(phrase => {
    //   ///    if it's part of a verse,  convert the format, otherwise don't
    //   return needsConverting(phrase) ? convert(phrase) : phrase
    // })
    // let output = phrases.join('\n')
    // document.querySelector("#textOut").value = output
  }
  
  return (
    <Col className="divider">
    <p>paste</p>
    <Card>
      <Card.Body>
        {/* <textarea id="textIn" onChange={updateInput}>{input}</textarea> */}
        {/* <div id="textIn" contentEditable>paste text here</div> */}
        <Dropzone/>
      </Card.Body>
      <Card.Footer>
        <RedButton 
          onclick={convertFormat}
        >
          Add First Letters
        </RedButton>
      </Card.Footer>
    </Card>
  </Col>
  )
}
