"use client";
import { SessionProvider } from "next-auth/react";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});



export default function RootLayout({ children }) {
  return (
    
    <html lang="en">
      
      <body  style={{
        margin: 0,
        padding: 0,
      }} className={`${geistSans.variable} ${geistMono.variable}`}>
        <SessionProvider>{children}</SessionProvider>
      </body>
    </html>
    
  );
}
