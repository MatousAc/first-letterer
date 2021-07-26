import { TextRun, HeadingLevel, AlignmentType } from "docx"

/// new verse flag
var newVerseFlag = true

/// helper functions
function isChapter(phrase) {return phrase.includes("Chapter")||phrase.includes("chapter")}
/// if there should be a new verse, but first word is NaN we assume it is a header
function isHeader(phrase) {return newVerseFlag && isNaN(phrase.split(' ')[0])}

/// is this the Kings/Ruth heading?
function isKRs(phrase) {return "1 Kings" === phrase || "Ruth" === phrase }

function setNewVerseFlag(phrase) {
  if (phrase === "" ) {
    newVerseFlag = true
  } else {
    newVerseFlag = false
  }
}

/// styles textruns
function style(phrase) {
  let basicStyle = {
    size: 12 * 2,
    // spacing: {line: 414}
  }
  
  if (isKRs(phrase)) {
    return [new TextRun({
      text: phrase,
      bold: true,
      size: 16 * 2, // things are half pts here
      heading: HeadingLevel.HEADING_2,
      alignment: AlignmentType.CENTER
    })]
  }
  
  if (isChapter(phrase)||isHeader(phrase)) {
    return [new TextRun({
      text: phrase,
      bold: true,
      ...basicStyle
    })]
  }

  /// at the beginning of a verse, we want to embolden the verse numbers
  if (newVerseFlag) {
    setNewVerseFlag(phrase)
    let words = phrase.split(' ')
    
    words = words.map(word => {
      ///    if number, mark it
      return !isNaN(word) ? `$~${word}$~` : word
    })

    let runs = words
      .join(' ')
      .split('$~')
      .filter(run => {
        return run !== '';
      })

    return runs.map(run => {
      return new TextRun({
        text: run,
        bold: !isNaN(run),
        ...basicStyle
      })
    })
  }
  setNewVerseFlag(phrase)
  return [new TextRun({
    text: phrase,
    ...basicStyle
  })]
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
  if (isChapter(phrase)||isHeader(phrase)||isKRs(phrase)) return false
  
  /// if there is an empty string, this must be the break between verses
  setNewVerseFlag(phrase)
  if (phrase === "" ) return false

  return true
}

function dq(s) {return document.querySelector(s)}

export { 
  needsConverting, 
  cleanPhrases, 
  cleanWords, 
  setNewVerseFlag,
  style,
  dq
}
