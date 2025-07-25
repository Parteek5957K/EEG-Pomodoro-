import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import { useNavigate, Link } from 'react-router-dom';

export default function Login() {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate input
    if (!credentials.email || !credentials.password) {
      alert("Both email and password are required.");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/api/auth/login", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email: credentials.email, password: credentials.password })
      });

      const json = await response.json();

      if (!response.ok) {
        alert(json.error || "Login failed. Please try again.");
        return;
      }

      if (json.success) {
        localStorage.setItem('userEmail', credentials.email);
        localStorage.setItem('token', json.authToken);
        navigate("/");
      } else {
        alert("Invalid credentials. Please try again.");
      }
    } catch (error) {
      console.error("Login error:", error);
      alert("Something went wrong. Please check your network connection.");
    }
  };

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <div
      className="background-image"
      style={{
        backgroundImage: 'url("https://images.ctfassets.net/dm4oa8qtogq0/3gaMARi7EBs799bMGOyKHu/4dff0bc6da1e31921c258e38e0c730bd/pomodoro-technique.jpg")',
        height: '100vh',
        backgroundSize: 'cover',
        width:'100%'
      }}
    >
      <div>
        <Navbar />
      </div>
      <div className="container">
        <form style={{backgroundImage:'url("https://newrelic.com/sites/default/files/styles/og_image/public/2021-04/pomodoro-timer.jpg?h=a68e76a0&itok=KWijElNp")', backgroundSize:'cover'}} className="w-50 m-auto mt-5 border bg-dark border-success rounded" onSubmit={handleSubmit}>
          <div className="m-3">
            <label htmlFor="email" className="form-label">Email address</label>
            <input
              type="email"
              className="form-control"
              name="email"
              value={credentials.email}
              onChange={onChange}
              aria-describedby="emailHelp"
              required
            />
            <div id="emailHelp" className="form-text">We'll never share your email with anyone.</div>
          </div>
          <div className="m-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              name="password"
              value={credentials.password}
              onChange={onChange}
              required
            />
          </div>
          <button type="submit" className="m-3 btn btn-success">Submit</button>
          <Link to="/signup" className="m-3 mx-1 btn btn-danger">New User</Link>
        </form>
      </div>
    </div>
  );
}