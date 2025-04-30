/* eslint-disable react/jsx-no-undef */
import React from 'react';
import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
    let navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate("/login");
    }

    return (
        <div>
            <nav className="navbar navbar-expand navbar-dark position-sticky"
                style={{  boxShadow: '#f0e4e475 15px 20px 20px 7px', position: "fixed", zIndex: "10", width: "100%", backgroundColor:'#000000a6' }}>
                <div className="container-fluid">
                    <Link className="navbar-brand fs-1 fst-italic" style={{fontFamily:"Times New Roman, Times, serif"}} to="/">PomodoroPersonalization</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link fs-5 mx-3 active" style={{fontFamily:'"Times New Roman", Times, serif'}} aria-current="page" to="/">Home</Link>
                            </li>
                        </ul>

                        {(!localStorage.getItem("token")) ? (
                            <form className="d-flex">
                                <Link className="btn bg-white mx-1" style={{color:'#33316f'}}to="/login">Login</Link>
                                <Link className="btn bg-white mx-1" style={{color:'#33316f'}} to="/signup">Signup</Link>
                            </form>
                        ) : (
                            <div>
                                <button onClick={handleLogout} className="btn bg-white text-success mx-2">Logout</button>
                            </div>
                        )}
                    </div>
                </div>
            </nav>
        </div>
    )
}
