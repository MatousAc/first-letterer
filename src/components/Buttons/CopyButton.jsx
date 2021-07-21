import React from 'react'
import Button from '@material-ui/core/Button';

export default function CopyButton({ copyFunction }) {
  return (
    <Button 
      variant='outlined' 
      onClick={copyFunction} 
      color="secondary"
    >
      Copy Text
    </Button>
  )
}
