"use client"

import { clientLoginUser } from "@/lib/api/client";
import { useState } from "react";

import "./login-btn.css";

export default function LoginButton() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = async () => {
    try {
      const userEmail = prompt("Please enter your email:");
      if (!userEmail) {
        console.error('Email is required');
        return;
      }

      const token = await clientLoginUser(userEmail);
      
      const delphiFrame = document.getElementById('delphi-frame') as HTMLIFrameElement | null;
      
      if (delphiFrame && delphiFrame.contentWindow) {
        delphiFrame.contentWindow.postMessage({
          type: 'sso_login',
          token: token
        }, '*');
        setIsLoggedIn(true);
      } else {
        console.error('Delphi frame not found');
      }
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  return (
    <button
      className={`login-button ${isLoggedIn ? 'logged-in' : ''}`}
      onClick={handleLogin}
      disabled={isLoggedIn}
    >
      {isLoggedIn ? 'Logged In' : 'Login'}
    </button>
  );
}