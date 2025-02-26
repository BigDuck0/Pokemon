"use client"
import '../styleCSS/style.css'
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter, redirect } from 'next/navigation'
function LoginPage() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const router = useRouter();

    const token = localStorage.getItem("token");
    if (token) window.location.href = "/";
    
    useEffect(() => {
      const token = localStorage.getItem("token");
      if (token) {
          router.push("/"); // ✅ ถ้ามี Token ให้ Redirect ไปหน้า Home
      }
  }, []); 

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
        const res = await fetch("http://localhost:5000/api/user/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, password }),
        });

        const data = await res.json();

        if (!res.ok) {
            setError(data.error || "Invalid credentials");
            return;
        }

        // ✅ บันทึก Token ลง localStorage
        localStorage.setItem("token", data.token);
        router.push("/"); // ✅ เปลี่ยนไปหน้า Home หลังจาก Login สำเร็จ
    } catch (error) {
        console.error("❌ Login error:", error);
        setError("Something went wrong, please try again.");
    }
};
  
    

    return (
        <div className="auth-container">
          <div className="auth-card">
            <h3>Login</h3>
            {error && <div className="error-message">{error}</div>}
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
            <button type="submit" className="auth-button login">LogIn</button>
            </form>

            <p>
              Don't have an account?{" "}
              <Link href="/register" className="text-blue-400 hover:underline">
                Register
              </Link>
            </p>
          </div>
        </div>
      );
    }

export default LoginPage