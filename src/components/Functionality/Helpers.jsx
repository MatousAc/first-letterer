var newVerseFlag = true

/// helper functions
function isChapter(phrase) {return phrase.includes("Chapter")||phrase.includes("chapter")}
/// if there should be a new verse, but first word is NaN we assume it is a header
function isHeader(phrase) {return newVerseFlag && isNaN(phrase.split(' ')[0])}

function parseStuff(doc) {
  console.log(doc)
}

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

function dq(s) {return document.querySelector(s)}

export { 
  isChapter, 
  isHeader, 
  cleanPhrases, 
  cleanWords, 
  setNewVerseFlag,
  parseStuff,
  dq
}
