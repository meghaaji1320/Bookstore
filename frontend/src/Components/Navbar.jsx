import React from 'react'
import {Link, useNavigate} from 'react-router-dom'
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../features/authSlice";
const Navbar = () => {
    const user = useSelector((s) => s.auth.user)
    const dp = useDispatch()
    
  
  return (
  <nav className='p-5 flex justify-between  bg-purple-300'>
    <h1>BOOK STORE</h1>
    <div className='flex gap-2.5 '>
         {user ? (
          <>
           <Link to="/">Home</Link>
           <Link to="/addbook">Add Book</Link>
           <button
              onClick={() => dp(logout())}
              className="text-red-600 font-semibold"
            >
              Logout
           </button>
          </>
        ) : (
          <>
            <Link
              to="/login"
              className="text-green-600 font-semibold"
            >
              Login
            </Link>

            <Link
              to="/register"
              className="text-blue-600 font-semibold"
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
