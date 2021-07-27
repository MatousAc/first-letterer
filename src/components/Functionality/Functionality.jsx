import { Document, Paragraph, Packer } from "docx";
/// helper functions
import { cleanWords, style, cleanPhrases, needsConverting } from './Helpers'
import Docxtemplater from 'docxtemplater';
import PizZip from 'pizzip';

/// here we process all our files
export default async function process(files) {
  files.forEach(file => {
    var phrases
    readWord(file)
    .then(data => {
      phrases = data.split("$$")
      // console.log(phrases)
      grind(phrases)
    })
  })
}

/// how to read text from a .docx file
function readWord(file) {
  return new Promise((res, rej) => {
    let reader = new FileReader() 
    reader.readAsBinaryString(file) 
    reader.onload = (e) => 
    { var zip = new PizZip(reader.result)
      var docx = new Docxtemplater()
        .loadZip(zip)

      const text = docx.getFullText()
      res(text)
    }
  })
}

function grind(phrases) {
  /// clean spaces out from the beginnings of the phrases
  phrases = cleanPhrases(phrases)
  
  /// redefine the array using each line
  phrases = phrases.map(phrase => {
    ///    if it's part of a verse,  add first letters, otherwise don't
    return needsConverting(phrase) ? addFirstLetters(phrase) : phrase
  })

  makeDoc(phrases)
}

function addFirstLetters(phrase) {  
  let words = phrase.split(' ')
  
  words = cleanWords(words)
  let first_letters = words.map(word => {
    /// get first letter, capitalize it
    return isNaN(word) ? word.substring(0, 1).toUpperCase() : `${word}`
  })
  
  /// return the phrase separated from first letters with a tab
  /// and join the letters by four spaces
  return `${phrase}\t ${first_letters.join('    ')}`
}

function makeDoc(phrases) {
  const paragraphs = phrases.map(phrase => {
    return new Paragraph({
      children: [...style(phrase)]
    })
  })
  
  const doc = new Document({
    creator: "Ac Hybl",
    orientation: "landscape",
    sections: [{
      children: [...paragraphs]
    }]
  })
  
  /// download each doc
  Packer.toBlob(doc).then(blob => {
    var link = document.createElement('a')
    link.href=window.URL.createObjectURL(blob);
    link.download="result.docx";
    link.click();
  })
}

export {
  addFirstLetters,
  makeDoc
}