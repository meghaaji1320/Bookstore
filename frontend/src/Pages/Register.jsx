import React, { useState } from "react";
import { useDispatch,useSelector } from "react-redux";
import { registerUser } from "../features/UserSlice";
const Register = () => {
    const {user} = useSelector(state => state.users)
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
    
  }
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
<input type="text" placeholder="enter your name"  value={formdata.username} name="username" onChange={handleInput} />
<input type="email"placeholder="enter your email address" value={formdata.email} name="email" onChange={handleInput} />
<input type="password"placeholder="enter your password" value={formdata.password} name="password" onChange={handleInput}   />
<button>Register</button>

      </form>
    </div>
  )
}

export default Register