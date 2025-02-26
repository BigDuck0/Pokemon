"use client";

import Link from "next/link";
import Style from "../styleCSS/Header.module.css";
import Image from "next/image";
import React, { useState, useEffect } from "react";

function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // ✅ ฟังก์ชันตรวจสอบสถานะการล็อกอิน
  const checkLoginStatus = () => {
    const token = localStorage.getItem("token");
    console.log("🔍 Checking token:", token); // ✅ Debug ดูค่าของ token
    setIsLoggedIn(!!token); // ✅ ถ้ามี token → ถือว่า Login อยู่
  };

useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
}, []);



  // ✅ ฟังก์ชัน Logout
  const handleLogout = () => {
    localStorage.removeItem("token"); // ✅ ลบ Token ออกจาก localStorage
    setIsLoggedIn(false); // ✅ อัปเดต state
    console.log("🚪 User Logged Out");
    window.location.reload(); // ✅ รีเฟรชหน้าใหม่ให้เช็คค่าใหม่
  };

  return (
    <header className={Style.header}>
      <div className={Style.logoContainer}>
        <Link href="/">
          <Image  
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/800px-International_Pok%C3%A9mon_logo.svg.png" 
            alt="Logo"
            width={180} 
            height={70} 
            className="mr-4"
          /> 
        </Link>
      </div>
      
      <nav className={Style.navLinks}>
        {!isLoggedIn ? (
          <>
            <Link href="/login" className={Style.navItemLogin}>
              Login
            </Link>
            <Link href="/register" className={Style.navItemSighUp}>
              Register
            </Link>
          </>
        ) : (
          <button onClick={handleLogout} className={Style.navItemLogout}>
            Logout
          </button>
        )}
      </nav>
    </header>
  );
}

export default Header;
