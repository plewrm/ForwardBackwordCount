import React from 'react'
import Card from './Card';
import usecounter from '../components/hooks/use-counter'

const ForwardCounter = () => {
  const counter=usecounter();
  return (
    <Card>{counter}</Card>
  )
}

export default ForwardCounter