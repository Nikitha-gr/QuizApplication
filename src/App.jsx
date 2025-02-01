import { useState } from 'react'
import './App.css'
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Quiz from './pages/Quiz'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <div className="main-cont">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path="/quiz" element={<Quiz/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </div>
  )
}

export default App
