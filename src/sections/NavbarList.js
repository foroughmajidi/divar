import React from 'react'
// react router
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
// pages
import MyDivar from './MyDivar'
import Chat from './Chat'
import AboutDivar from './AboutDivar'
import Blog from './Blog'
import Support from './Support'
// navbar
import Navbar from '../components/Navbar'
const ReactRouterSetup = () => {
  return (
    <Router>
      <Navbar />
    </Router>
  )
}

export default ReactRouterSetup
