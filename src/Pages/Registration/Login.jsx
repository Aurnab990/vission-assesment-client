import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:3000/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    const user = users.find((u) => u.email === email && u.password === password);
    if(user.email === "admin@gmail.com"){
      alert("Login Successful!");
      navigate("/admin-dashboard");

    }

    else if (user.email !== "admin@gmail.com") {
      alert("Login Successful!");
      navigate("/user-dashboard"); 
    } else {
      alert("Invalid email or password!");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-center text-gray-700">Login</h2>
        <form onSubmit={handleLogin} className="mt-4">
          <label className="input input-bordered flex items-center gap-2 mb-4">
            <input type="email" name="email" className="grow p-2 outline-none" placeholder="Email" required />
          </label>
          <label className="input input-bordered flex items-center gap-2 mb-4">
            <input type="password" name="password" className="grow p-2 outline-none" placeholder="Password" required />
          </label>
          <label className="text-orange-500">
            Don't have an account?{" "}
            <Link to="/sign-up" className="text-red-500 font-bold hover:underline">
              Sign-up
            </Link>
          </label>
          <button type="submit" className="w-full mt-3 p-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
