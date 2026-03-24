import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { registerUser } from "../features/authSlice";
import { useNavigate } from "react-router-dom";
const Register = () => {
  const navigate = useNavigate()
    const dp = useDispatch()
  const [formdata, setFormdata] = useState({ username: "", email: "", password: "" });
  const handleInput = (e) =>{
    const {name,value} = e.target 
    setFormdata((prev) => ({...prev,[name]:value}))
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const {username,email,password} = formdata
    if(!username || !email || !password){
        return alert("No details provided")
    }
    dp(registerUser(formdata))
    alert ("user registered")
    
  }
  return (
//     <div>
//       <form action="" onSubmit={handleSubmit}>
// <input type="text" placeholder="enter your name"  value={formdata.username} name="username" onChange={handleInput} />
// <input type="email"placeholder="enter your email address" value={formdata.email} name="email" onChange={handleInput} />
// <input type="password"placeholder="enter your password" value={formdata.password} name="password" onChange={handleInput}   />
// <button onClick={()=>navigate('/login')}>Register</button>

//       </form>
//     </div>
<div className="min-h-screen bg-gray-50 flex items-center justify-center">

  <form
    action=""
    onSubmit={handleSubmit}
    className="bg-white shadow-lg rounded-2xl px-8 py-10 flex flex-col gap-4 w-full max-w-sm border border-gray-200"
  >

    <h1 className="text-2xl font-bold text-center text-pink-800 mb-2">
      REGISTER
    </h1>

    <input
      className="p-2 border border-gray-300 rounded-lg bg-white text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
      type="text"
      placeholder="enter your name"
      value={formdata.username}
      name="username"
      onChange={handleInput}
    />

    <input
      className="p-2 border border-gray-300 rounded-lg bg-white text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
      type="email"
      placeholder="enter your email address"
      value={formdata.email}
      name="email"
      onChange={handleInput}
    />

    <input
      className="p-2 border border-gray-300 rounded-lg bg-white text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
      type="password"
      placeholder="enter your password"
      value={formdata.password}
      name="password"
      onChange={handleInput}
    />

    <button
      className="mt-3 px-4 py-2 bg-pink-500 text-white rounded-lg font-semibold hover:bg-blue-600 transition duration-200"
      onClick={() => navigate('/login')}
    >
      Register
    </button>

  </form>

</div>
  )
}

export default Register