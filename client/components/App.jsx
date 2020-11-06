import React from 'react'
import Drum from './Drums'
import Sound from './Step'
import {HashRouter as Router, Route} from 'react-router-dom'



const App = () => {
  return (
    <>
      <Route exact path ='/' component = {Drum}/>
      <Route exact path ='/step' component = {Sound}/>
   </>
  )
}

export default App
