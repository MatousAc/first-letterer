import React, { useState } from 'react'
import { Col, Card, Button } from 'react-bootstrap'
import './fl.css';

export default function TextIn() {
  // const [input, setInput] = useState('')
  /// new verse flag
  var newVerseFlag = true
  var rawText
  
  function updateInput(e) {
    // console.log(`updated to: ${input}`)
    // setInput(e.target.innerHTML)
  }

  function dq(s) {return document.querySelector(s)}

  function simplifyText(text) {
    
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

  /// remove punctuation
  function cleanWords(words) {
    /// stripping punctuation using regex
    return words.map(word => {
      return word.replace(/[.,'‘’“”"\/#!$%\^&\*;:{}=\-_`~()]/g,"")
    })
  }

  function needsConverting(phrase) {
    if (phrase.includes("Chapter")||phrase.includes("chapter")) {
      // console.log(`Chapter begining: ${phrase}`)
      return false
    }

    // console.log(`flag is ${newVerseFlag}`)
    
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
    
    console.log(words)
    words = cleanWords(words)
    console.log(words)
    let first_letters = words.map(word => {
      /// get first letter, capitalize it
      return isNaN(word) ? word.substring(0, 1).toUpperCase() : `${word}`
    })
    console.log(first_letters)
    
    /// return the phrase separated from first letters with a tab
    /// and join the letters by four spaces
    // return `${phrase}\t${first_letters.join('    ')}`
    return `TABGOESHERE${first_letters.join('    ')}`
  }
  
  function convertFormat() {
    // console.log(input.substring(0, 140))
    /// take the entire text and split up the lines
    rawText = dq("#textIn").innerHTML
    console.log(rawText)
    rawText = rawText.split("</p>")
    let simpleText = dq("#hiddenTextArea").value
    console.log(rawText)
    console.log(simpleText)
    let phrases = simpleText.split('\n')
    /// clean spaces out from the beginnings of the phrases
    phrases = cleanPhrases(phrases)
    // console.log(phrases)
    /// redefine the array using each line
    phrases = phrases.map(phrase => {
      ///    if it's part of a verse,  convert the format, otherwise don't
      return needsConverting(phrase) ? convert(phrase) : '' //phrase
    })

    for (let i = 0; i < rawText.length; i++) {
      rawText[i] += phrases[i]
    }

    // console.log(phrases)
    let output = rawText.join('</p>')
    // console.log(output.substring(0, 140))
    dq("#textOut").innerHTML = output
  }
  
  return (
    <Col className="divider">
    <p>paste</p>
    <Card>
      <Card.Body>
        <div 
          id="textIn" 
          contentEditable="true" 
          // onChange={updateInput}
        ></div>
      </Card.Body>
      <Card.Footer>
        <Button onClick={convertFormat} variant="dark">Add First Letters</Button>
      </Card.Footer>
    </Card>
  </Col>
  )
}
