import { Document, Section, Paragraph, Textrun, Packer } from "docx";
import * as fs from "fs"
/// helper functions
import { 
  cleanWords, 
  style,
  dq
} from './Helpers'


export default function process(files) {
  files.forEach(file => {
    console.log(file.name, file.size)
    console.log(file)

    // const reader = new FileReader
    // reader.onload = async (e) => { 
    //   const text = (e.target.result)
    //   console.log("line 24", text)
    // };

    // let text = reader.readAsBinaryString(file)
  })
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