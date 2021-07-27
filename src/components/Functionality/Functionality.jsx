import { Document, Section, Paragraph, Textrun, Packer } from "docx";
/// helper functions
import { cleanWords, style, dq } from './Helpers'
import Docxtemplater from 'docxtemplater';
import PizZip from 'pizzip';
// import PizZipUtils from 'pizzip/utils/index.js';
// import { saveAs } from 'file-saver';

export default function process(files) {
  files.forEach(file => {
      let text = readWord(file)
      console.log(text)
  })
}

function readWord(file)
{ let reader = new FileReader() 
  reader.readAsBinaryString(file) 
  reader.onload = (e) => 
  { var zip = new PizZip(reader.result)
    var docx = new Docxtemplater().loadZip(zip) 

    const text = docx.getFullText()
    console.log(text)
    return text
  }
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

function createDocFrom(phrases) {
  console.table(phrases)
  const paragraphs = phrases.map(phrase => {
    return new Paragraph({
      children: [...style(phrase)]
    })
  })
  // console.log(paragraphs)
  
  const doc = new Document({
    creator: "Ac Hybl",
    orientation: "landscape",
    sections: [{
      children: [...paragraphs]
    }]
  })

  console.log(doc)

  // // Used to export the file into a .docx file
  Packer.toBlob(doc).then(blob => {
    console.log(blob)
    var link = document.createElement('a')
    link.href=window.URL.createObjectURL(blob);
    link.download="result.docx";
    link.click();
  })
}

export {
  addFirstLetters,
  createDocFrom
}