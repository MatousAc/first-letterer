import React, { useState } from 'react'
import { Col, Card, Button } from 'react-bootstrap'
import './fl.css';

export default function TextIn() {
  const [input, setInput] = useState('')
  /// new verse flag
  var newVerseFlag = true
  
  function updateInput(e) {
    setInput(e.target.value)
  }

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
      return (ps[ps.length - 1] === '') ? phrase.substring(0, phrase.length - 2) : phrase
    })

    return newPhrases
  }

  function needsConverting(phrase) {
    if (phrase.includes("Chapter")||phrase.includes("chapter")) {
      console.log(`Chapter begining: ${phrase}`)
      return false
    }

    console.log(`flag is ${newVerseFlag}`)
    
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
    console.log(`converting ${phrase.substring(0, 10)}`)
    let words = phrase.split(' ')
    let first_letters = words.map(word => {
      /// get first letter, capitalize it
      return word.substring(0, 1).toUpperCase()
    })
    console.log(first_letters)
    return phrase
  }
  
  function convertFormat() {
    console.log(input.substring(0, 140))
    /// take the entire text and split up the lines
    let phrases = input.split('\n')
    /// clean spaces out from the beginnings of the phrases
    phrases = cleanPhrases(phrases)
    // console.log(phrases)
    /// redefine the array using each line
    phrases = phrases.map(phrase => {
      ///    if it's part of a verse,  convert the format, otherwise don't
      return needsConverting(phrase) ? convert(phrase) : phrase
    })
    console.log(phrases)
    let output = phrases.join('\n')
    console.log(output.substring(0, 140))
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
        <Button onClick={convertFormat} variant="dark">Add First Letters</Button>
      </Card.Footer>
    </Card>
  </Col>
  )
}
