import React, { useState } from "react";

const Login = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleInput = (e) => {
    const{name,value}=e.target
    setForm((prev) => ({...prev,[name]:value}))
  };

  const handleSubmit = (e) => {
    e.preventDefault();
     
  };


  return (
    <div>
      <form className="min-h-screen flex flex-col items-center justify-center" onSubmit={handleSubmit}>
        <h1>LOGIN</h1>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          placeholder="Enter the email address"
          value={form.email}
          onChange={handleInput}
        />

        <label>Password:</label>
        <input
          type="password"
          name="password"
          placeholder="Enter the password"
          value={form.password}
          onChange={handleInput}
        />

        <button type="submit" >Login</button>
      </form>
    </div>
  );
};

export default Login;
