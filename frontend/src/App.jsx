import React from 'react'
import Bookdetail from './Pages/Bookdetail'
import Home from './Pages/Home'
import Login from './Pages/Login'
import Register from './Pages/Register'
import { Route, Routes } from 'react-router-dom'
import Navbar from './Components/Navbar'


const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/'element={<Home />} />
        <Route path='/bookdetail'element={<Bookdetail />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/register'element={<Register />}/>
      </Routes>
    </div>
  )
}

export default App
