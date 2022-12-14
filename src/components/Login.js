import React from "react";
import { useState, useEffect } from "react";
export default function LoginButton() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  function handleLogin() {
    // Handle login here, such as checking credentials against a database
    setIsLoggedIn(true);
  }
  function handleLogout() {
    setIsLoggedIn(false);
  }
  useEffect(() => {
    console.log(isLoggedIn);
  }, [isLoggedIn]);
  return (
    <>
      {!isLoggedIn ? (
        <button onClick={handleLogin}>Login</button>
      ) : (
        <button onClick={handleLogout}>Logout</button>
      )}
    </>
  );
}
