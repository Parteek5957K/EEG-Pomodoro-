import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

export default function Signup() {
  const [credentials, setCredentials] = useState({ name: "", email: "", password: "" });
  const [emailError, setEmailError] = useState(""); // State for email error message
  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setEmailError(""); // Clear previous errors

    let isFormValid = true;

    // Client-side validation
    if (!credentials.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(credentials.email)) {
      setEmailError("Please enter a valid email address.");
      isFormValid = false;
    }

    if (!credentials.password || credentials.password.length < 5) {
        alert("Password must be at least 5 characters."); // basic alert for password
        isFormValid = false;
    }

    if (!credentials.name || credentials.name.length < 3) {
        alert("Name must be at least 3 characters");
        isFormValid = false;
    }

    if (!isFormValid) {
      return; // Stop submission if client-side validation fails
    }

    try {
      const response = await fetch("http://localhost:5000/api/auth/createuser", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: credentials.name,
          email: credentials.email,
          password: credentials.password,
        }),
      });

      const json = await response.json();

      if (json.success) {
        localStorage.setItem('token', json.authToken);
        navigate("/login");
      } else {
        if (json.error === "Please enter a unique value for email.") {
          setEmailError("Email address is already taken."); // Set specific error
        } else {
          alert(json.error || "Signup Failed"); // Generic server error
        }
      }
    } catch (error) {
      console.error("Signup error:", error);
      alert("Something went wrong. Please check your network connection.");
    }
  };

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
    if (e.target.name === "email") {
      setEmailError(""); // Clear email error on input change
    }
  };

  return (
    <div style={{ backgroundImage: 'url("https://images.ctfassets.net/dm4oa8qtogq0/3gaMARi7EBs799bMGOyKHu/4dff0bc6da1e31921c258e38e0c730bd/pomodoro-technique.jpg")', backgroundSize: 'cover', height: '100vh' }}>
      <div>
        <Navbar />
      </div>
      <div className='container'>
        <form style={{backgroundImage:'url("https://newrelic.com/sites/default/files/styles/og_image/public/2021-04/pomodoro-timer.jpg?h=a68e76a0&itok=KWijElNp")', backgroundSize:'cover'}} className='w-50 m-auto mt-5 border bg-dark border-success rounded' onSubmit={handleSubmit}>
          <div className="m-3">
            <label htmlFor="name" className="form-label">Name</label>
            <input type="text" className="form-control" name='name' value={credentials.name} onChange={onChange} aria-describedby="emailHelp" />
          </div>
          <div className="m-3">
            <label htmlFor="email" className="form-label">Email address</label>
            <input type="email" className="form-control" name='email' value={credentials.email} onChange={onChange} aria-describedby="emailHelp" />
          </div>
          <div className="m-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
            <input type="password" className="form-control" value={credentials.password} onChange={onChange} name='password' />
          </div>
          <button type="submit" className="m-3 btn btn-success">Submit</button>
          <Link to="/login" className="m-3 mx-1 btn btn-danger">Already a user</Link>
        </form>
      </div>
    </div>
  );
}
