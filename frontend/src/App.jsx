import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Signup from './Signup'
import Login from './Login'
import Chatbot from './Chatbot'
import GlobalStyle from './GlobalStyle'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Signup/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/chatbot' element={<Chatbot/>}/>
      </Routes>
      <GlobalStyle/>
    </BrowserRouter>
  )
}

export default App
