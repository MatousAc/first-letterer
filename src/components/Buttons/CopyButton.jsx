import React from 'react'
import RedButton from './RedButton';

export default function CopyButton({ text }) {
  function copyText() {
    navigator.clipboard.writeText(text)
  }
  
  return (
    <RedButton 
      onclick={copyText} 
    >
      Copy Text
    </RedButton>
  )
}
