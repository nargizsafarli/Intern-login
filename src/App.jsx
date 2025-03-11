import React from 'react'
import Register from './Components/Register/Register'
import Login from './Components/Login/Login'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './Components/Layout/Layout'

function App() {
  return (
    <div>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout> <Register/></Layout>}  />
      <Route path="login" element={<Layout><Login/></Layout>} />
     
    </Routes>
  </BrowserRouter>
  </div>
  )
}

export default App