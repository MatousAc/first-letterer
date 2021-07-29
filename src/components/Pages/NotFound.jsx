import React from 'react'
import { Card } from 'react-bootstrap'
import './card.css'

export default function NotFound() {
  return (
    <Card>
      <Card.Body>
        <p>Unfortunately that url doesn't match any page on this site.</p>
        <a href='/'>Go Home</a>
      </Card.Body>
    </Card>
  )
}
