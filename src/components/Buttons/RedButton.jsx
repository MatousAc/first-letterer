import React from 'react'
import Button from '@material-ui/core/Button'

export default function RedButton({ onclick, children }) {
  return (
    <Button 
      onClick={onclick} 
      variant="outlined" 
      color="secondary"
    >
      {children}
  </Button>
  )
}
