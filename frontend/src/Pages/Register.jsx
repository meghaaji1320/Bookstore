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
    <div>
      <form action="" onSubmit={handleSubmit}>
<input type="text" placeholder="enter your name"  value={formdata.username} name="username" onChange={handleInput} />
<input type="email"placeholder="enter your email address" value={formdata.email} name="email" onChange={handleInput} />
<input type="password"placeholder="enter your password" value={formdata.password} name="password" onChange={handleInput}   />
<button onClick={()=>navigate('/login')}>Register</button>

      </form>
    </div>
  )
}

export default Register