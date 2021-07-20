import React, { useState } from 'react'
import { Col, Card } from 'react-bootstrap'
import Button from '@material-ui/core/Button';
import './fl.css';

export default function TextIn() {
  const [input, setInput] = useState('')
  /// new verse flag
  var newVerseFlag = true
  
  function updateInput(e) {
    setInput(e.target.value)
  }

  function dq(s) {return document.querySelector(s)}

  /// to clean up whitespace
  function cleanPhrases(phrases) {
    // split phrases
    
    /// remove leading whitespace
    let newPhrases = phrases.map(phrase => {
      let ps = phrase.split(' ')
      return (ps[0] === '') ? phrase.substring(1,phrase.length) : phrase
    })

    /// remove trailing whitespace
    newPhrases = newPhrases.map(phrase => {
      let ps = phrase.split(' ')
      return (ps[ps.length - 1] === '') ? phrase.substring(0, phrase.length - 1) : phrase
    })

    return newPhrases
  }

  /// remove punctuation
  function cleanWords(words) {
    /// stripping punctuation using regex
    return words.map(word => {
      return word.replace(/[.,'‘’“”"\/#!$%\^&\*;:{}=\-_`~()]/g,"")
    })
  }

  function needsConverting(phrase) {
    if (phrase.includes("Chapter")||phrase.includes("chapter")) {
      return false
    }

    
    /// if there should be a new verse, but the first word is not a verse number,
    /// we assume it is a header and we don't need to convert that
    if (newVerseFlag && isNaN(phrase.split(' ')[0])) {
      return false
    }
    
    /// if there is an empty string, this must be the beginning of a new verse
    if (phrase === "" ) {
      newVerseFlag = true
      return false
    } else {
      newVerseFlag = false
    }
    
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
    /// take the entire text and split up the lines
    let phrases = input.split('\n')
    /// clean spaces out from the beginnings of the phrases
    phrases = cleanPhrases(phrases)
    /// redefine the array using each line
    phrases = phrases.map(phrase => {
      ///    if it's part of a verse,  convert the format, otherwise don't
      return needsConverting(phrase) ? convert(phrase) : phrase
    })
    let output = phrases.join('\n')
    document.querySelector("#textOut").value = output
  }
  
  return (
    <Col className="divider">
    <p>paste</p>
    <Card>
      <Card.Body>
        <textarea id="textIn" onChange={updateInput}>{input}</textarea>
      </Card.Body>
      <Card.Footer>
        <Button onClick={convertFormat} variant="outlined">Add First Letters</Button>
      </Card.Footer>
    </Card>
  </Col>
  )
}
