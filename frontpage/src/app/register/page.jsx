"use client"
import '../styleCSS/style.css'
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
function RegisterPage() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const token = localStorage.getItem("token");
    if (token) window.location.href = "/";


    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
    
        if (!email || !password || !confirmPassword) {
          setError("Please complete all inputs.");
          return;
        }
    
        if (password !== confirmPassword) {
          setError("Passwords do not match!");
          return;
        }
    
        try {
          const res = await fetch("http://localhost:5000/api/user/register", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, password }),
          });
    
          const data = await res.json();
    
          if (!res.ok) {
            setError(data.error || "Registration failed");
            return;
          }
    
          // ✅ บันทึก Token ลง localStorage
          localStorage.setItem("token", data.token);
          router.push("/"); 
        } catch (error) {
          console.error("❌ Registration error:", error);
          setError("Something went wrong, please try again.");
        }
      };
    
    
    return (
        <div className="auth-container">
          <div className="auth-card">
            <h3>Register</h3>
            {error && <div className="error-message">{error}</div>}
            {success && <div className="success-message">{success}</div>}
            <form onSubmit={handleSubmit} className="auth-form">
            <input
                type="text"
                className="auth-input"
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
            />
            <input
                type="password"
                className="auth-input"
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
            />
            <input
                type="password"
                className="auth-input"
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Confirm your password"
            />
            <button type="submit" className="auth-button register">Sign Up</button>
            </form>

            <p>
              Already have an account?{" "}
              <Link href="/login" className="text-blue-400 hover:underline">
                Login
              </Link>
            </p>
          </div>
        </div>
      );
    }

export default RegisterPage