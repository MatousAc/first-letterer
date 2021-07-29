import React, { useCallback, useMemo } from 'react';
import {useDropzone} from 'react-dropzone';
import process from '../Functionality/Functionality.jsx'
import './dropzone.css'


const activeStyle = {
  borderColor: 'hsl(341deg 95% 14%)',
  transform: 'scale(1.05)',
  textShadow: '2px 2px 1px #eeeeee',
  boxShadow: '1px 1px 5px 0px lightgrey'
};

export default function Dropzone() {
  const onDrop = useCallback(acceptedFiles => {
    process(acceptedFiles)
  }, [])

  const {
    getRootProps, 
    getInputProps, 
    isDragActive,
    acceptedFiles
  } = useDropzone({
    onDrop, // to trigger a function on drop
    accept: '.docx' // accept these file types only
  })

  /// styles we want applied dynamically
  const style = useMemo(() => ({
    ...(isDragActive ? activeStyle : {})
  }), [
    isDragActive
  ]);
  
  return (
      <div id="dropzone" {
        ...getRootProps(
          {style, className: 'dropzone'})
        }>
        <input {...getInputProps()} />
        <p>drop files here,<br/>or click to select<br/>(only .docx)</p>
      </div>
  );
}