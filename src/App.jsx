import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import Home from './components/Home'
import Profil from './components/Profil'
import SignUp from './components/SignUp'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <NavBar />
        <main>
        <Routes>
          <Route path='/' element= {<Home />} />
          <Route path='/profil' element= {<Profil />} />
          <Route path='/signup' element= {<SignUp />} />
        </Routes>
        </main>
      </BrowserRouter>
    </>
  )
}

export default App
