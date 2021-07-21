import React, { useState } from 'react'
import { Col, Card } from 'react-bootstrap'
import RedButton from '../Buttons/RedButton.jsx';
import './inNout.css';

export default function TextIn() {
  const [input, setInput] = useState('')
  /// new verse flag
  var newVerseFlag = true
  
  function updateInput(e) {
    setInput(e.target.value)
  }

  /// helper functions
  function isChapter(phrase) {return phrase.includes("Chapter")||phrase.includes("chapter")}
  /// if there should be a new verse, but first word is NaN we assume it is a header
  function isHeader(phrase) {return newVerseFlag && isNaN(phrase.split(' ')[0])}
  function setNewVerseFlag(phrase) {
    if (phrase === "" ) {
      newVerseFlag = true
    } else {
      newVerseFlag = false
    }
  }

  /// mark things as bold
  // function markBold(phrase) {
  //   if (isChapter(phrase)||isHeader(phrase)) return true
  //   setNewVerseFlag(phrase)
  //   return false
  // }

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
