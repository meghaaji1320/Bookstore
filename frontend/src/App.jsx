import React from 'react'
import Bookdetail from './Pages/Bookdetail'
import Home from './Pages/Home'
import Login from './Pages/Login'
import Register from './Pages/Register'
import { Route, Routes } from 'react-router-dom'
import Navbar from './Components/Navbar'
import ProtectedRoute from './Components/ProtectedRoute'
import AddBook from './Pages/AddBook'
import {Toaster} from "react-hot-toast"

const App = () => {
  return (
    <div>
      <Toaster/>
      <Navbar />
      <Routes>
        <Route path='/'element={<ProtectedRoute><Home /></ProtectedRoute>} />
        <Route path='/bookdetail/:id'element={<ProtectedRoute><Bookdetail /></ProtectedRoute>}/>
        <Route path='/addbook' element={<ProtectedRoute><AddBook /></ProtectedRoute>}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/register'element={<Register />}/>
      </Routes>
    </div>
  )
}

export default App
