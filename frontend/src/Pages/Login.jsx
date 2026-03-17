import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../features/authSlice";
const Login = () => {
  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  const navigate = useNavigate

  const dp = useDispatch()
  const handleInput = (e) => {
    const{name,value}=e.target
    setForm((prev) => ({...prev,[name]:value}))
  };

  const handleSubmit = (e) => {
    e.preventDefault();
      dp(loginUser(form))
  };


  return (
    <div>

      <form className="min-h-screen flex flex-col items-center justify-center gap-3" onSubmit={handleSubmit}>
  
  <h1 className="text-2xl font-bold">LOGIN</h1>

  <label className="text-gray-700">Username:</label>
  <input
    className="p-2 border border-gray-400 rounded bg-white text-black"
    type="text"
    name="username"
    placeholder="Enter the username"
    value={form.username}
    onChange={handleInput}
  />

  <label className="text-gray-700">Password:</label>
  <input
    className="p-2 border border-gray-400 rounded bg-white text-black"
    type="password"
    name="password"
    placeholder="Enter the password"
    value={form.password}
    onChange={handleInput}
  />

  <button
    className="px-4 py-2 bg-blue-500 text-white rounded"
    type="submit"
  >
    Login
  </button>

</form>
    </div>
  );
};

export default Login;
