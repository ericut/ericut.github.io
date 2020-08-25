import React from 'react'
import Main from './pages/index'
import {
  BrowserRouter as Router
} from "react-router-dom"
import GlobalStyles from './assets/global'


const App = () => {
  return (
  <Router>
    <GlobalStyles />
    <Main></Main>
  </Router>
  )
}

export default App
