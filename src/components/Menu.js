import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

function Menu() {
  const imformation = useSelector((state) => state.authReducer);
  const [getLoggedIn, setLoggedIn] = useState(false);

  const token = localStorage.getItem("jwt_token");
  useEffect(() => {
    if (imformation.loggedOn || token) {
      setLoggedIn(true);
    }
  }, [imformation, token, getLoggedIn]);

  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar-light bg-light"
        style={{
          background: "#FFFFFF",
          boxShadow: "2px 1px 6px -2px rgba(0,0,0,0.3)",
        }}
      >
        <div
          className="navbar-brand"
          style={{
            fontWeight: "bold",
          }}
        >
          Project Management App
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse navbar-right"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav ml-auto navbar-right">
            <li className="nav-item active">
              <NavLink to="/" className="nav-link">
                Home<span className="sr-only">(current)</span>
              </NavLink>
            </li>
            {!getLoggedIn && (
              <li className="nav-item active">
                <NavLink to="/register" className="nav-link">
                  Register
                </NavLink>
              </li>
            )}
            {!getLoggedIn && (
              <li className="nav-item active">
                <NavLink to="/login" className="nav-link">
                  Login
                </NavLink>
              </li>
            )}
            {getLoggedIn && (
              <li className="nav-item active">
                <NavLink to="/logout" className="nav-link">
                  Logout
                </NavLink>
              </li>
            )}
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Menu;
