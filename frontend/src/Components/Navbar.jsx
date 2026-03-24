import React from 'react'
import {Link, useNavigate} from 'react-router-dom'
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../features/authSlice";
const Navbar = () => {
    const user = useSelector((s) => s.auth.user)
    const dp = useDispatch()
    
  
  return (
  <nav className='p-5 flex justify-between  bg-pink-200'>
    <h1 className='text-3xl font-bold text-pink-900'>BOOK STORE</h1>
    <div className='flex gap-2.5 '>
         {user ? (
          <>
           <Link className='bg-pink-600 p-2 rounded-xl text-white' to="/">Home</Link>
           <Link className='bg-pink-600 p-2 rounded-xl text-white' to="/addbook">Add Book</Link>
           <button
              onClick={() => dp(logout())}
              className="font-semibold bg-pink-800 p-2 rounded-xl text-white"
            >
              Logout
           </button>
          </>
        ) : (
          <>
            <Link 
              to="/login"
              className="bg-pink-600 p-2 rounded-xl text-white"
            >
              Login
            </Link>

            <Link
              to="/register"
              className="bg-pink-800 p-2 rounded-xl text-white"
            >
              Register
            </Link>
          </>
        )}
        

    </div>
  </nav>
  )
}

export default Navbar
