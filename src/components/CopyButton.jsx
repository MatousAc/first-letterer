import React from 'react'
import Button from '@material-ui/core/Button';

export default function CopyButton({ outText }) {
  function copyText() {
    navigator.clipboard.writeText(outText)
  }

  return (
    <Button 
      variant='outlined' 
      onClick={copyText} 
      color="secondary"
    >
      Copy Text
    </Button>
  )
}
