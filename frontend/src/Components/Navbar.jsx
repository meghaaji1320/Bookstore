import React from 'react'

const Navbar = () => {
  return (
  <nav className='p-5 flex justify-between  bg-purple-300'>
    <h1>BOOK STORE</h1>
    <ul className='flex gap-2.5 '>
        <li>Register</li>
        <li>Login</li>
        <li>Bookdetails</li>
    </ul>
  </nav>
  )
}

export default Navbar
