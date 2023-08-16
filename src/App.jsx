import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import Home from './components/Home'
import Profil from './components/Profil'
import Register from './components/Register'
import Login from './components/Login'

function App() {

  return (
    <>
      <BrowserRouter>
        <NavBar />
        <main>
        <Routes>
          <Route path='/' element= {<Home />} />
          <Route path='/profil' element= {<Profil />} />
          <Route path='/login' element= {<Login />} />
          <Route path='/register' element= {<Register />} />
        </Routes>
        </main>
      </BrowserRouter>
    </>
  )
}

export default App
