import React, { useCallback } from 'react';
import {useDropzone} from 'react-dropzone';
import process from '../Functionality/Functionality.jsx'
import './dropzone.css'

export default function Dropzone(props) {
  const onDrop = useCallback(acceptedFiles => {
    process(acceptedFiles)
  }, [])

  const {
    getRootProps, 
    getInputProps, 
    isDragActive,
    acceptedFiles,
    fileRejections
  } = useDropzone({
    onDrop, // to trigger a function on drop
    accept: '.docx' // accept these file types
  })
  
  return (
      <div id="dropzone" {
        ...getRootProps(
          {className: 'dropzone'})
        }>
        <input {...getInputProps()} />
        <p>drop files here,<br/>or click to select<br/>(only .docx)</p>
      </div>
  );
}