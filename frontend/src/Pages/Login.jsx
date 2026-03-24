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
//     <div>

//       <form className="min-h-screen flex flex-col items-center justify-center gap-3" onSubmit={handleSubmit}>
  
//   <h1 className="text-2xl font-bold">LOGIN</h1>

//   <label className="text-gray-700">Username:</label>
//   <input
//     className="p-2 border border-gray-400 rounded bg-white text-black"
//     type="text"
//     name="username"
//     placeholder="Enter the username"
//     value={form.username}
//     onChange={handleInput}
//   />

//   <label className="text-gray-700">Password:</label>
//   <input
//     className="p-2 border border-gray-400 rounded bg-white text-black"
//     type="password"
//     name="password"
//     placeholder="Enter the password"
//     value={form.password}
//     onChange={handleInput}
//   />

//   <button
//     className="px-4 py-2 bg-blue-500 text-white rounded"
//     type="submit"
//   >
//     Login
//   </button>

// </form>
//     </div>
<div className="min-h-screen bg-gray-100 flex items-center justify-center">

  <form
    className="bg-white shadow-xl rounded-2xl px-8 py-10 flex flex-col gap-4 w-full max-w-sm border border-gray-200"
    onSubmit={handleSubmit}
  >
  
    <h1 className="text-3xl font-bold text-center text-pink-800 mb-2">
      LOGIN
    </h1>

    <label className="text-gray-700 text-sm font-medium">
      Username
    </label>
    <input
      className="p-2 border border-gray-300 rounded-lg bg-white text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
      type="text"
      name="username"
      placeholder="Enter the username"
      value={form.username}
      onChange={handleInput}
    />

    <label className="text-gray-700 text-sm font-medium">
      Password
    </label>
    <input
      className="p-2 border border-gray-300 rounded-lg bg-white text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
      type="password"
      name="password"
      placeholder="Enter the password"
      value={form.password}
      onChange={handleInput}
    />

    <button
      className="mt-3 px-4 py-2 bg-pink-500 text-white rounded-lg font-semibold hover:bg-blue-600 transition duration-200"
      type="submit"
    >
      Login
    </button>

  </form>

</div>

  );
};

export default Login;
