import React from 'react'
import { Button } from 'react-bootstrap'

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
