import React from 'react'
import { Document, Paragraph, Packer } from "docx";
import * as fs from 'fs'
/// helper functions
import { 
  isChapter, 
  isHeader, 
  cleanPhrases, 
  cleanWords, 
  setNewVerseFlag, 
  parseStuff,
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

    let doc = new Document(file)
    console.log(doc)
  })
}

