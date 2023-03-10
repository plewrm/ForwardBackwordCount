import React from 'react'
import Card from './Card'
import usecounter from '../components/hooks/use-counter'

const BackwardCounter = () => {
  const counter=usecounter(false);
 
  return (
    <Card>{counter}</Card>
  )
}

export default BackwardCounter