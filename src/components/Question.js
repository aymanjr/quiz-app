import React from 'react'
import { stateContext } from '../hooks/useStateContext'

export default function Question() {
   const {context,setContext}= useContext(stateContext)
   setContext({
    ...context,
    timeTaken:1
   })
  return (
    
  )
}
