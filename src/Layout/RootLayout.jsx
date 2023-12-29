import React from "react";
import { Outlet, Link, NavLink } from "react-router-dom";
import styles from "./RootLayout.module.css";
import { useAuth } from "../context/AuthProvider";

// active class automatically only Navlink Component ka use karne par hi ayegi,

// call back function se className and styly apply karne ke liye bhi NavLink ka use karana hoga

function RootLayout() {
  const { isLoggedIn, setIsloggedIn } = useAuth();
  return (
    <div>
      <h1>Navbar</h1>
      <nav>
        <ul>
          <li>
            {/* Ye jo Link tag hai actual me a tag ki tarah hi work karega, a tag laga kar kuch bhi styling kar sakte hai. Iska control React me Link Component ko diya hai jissse jab bhi nav link par click kare to pura page refressh na ho jisse performance badati hai App ki  
            {LINK INTERNALY a TAG HI HAI } */}
            <Link to="/">Home</Link>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          {/* Link ki jagah NavLink ka bhi use kar sakte hai, NavLink ka use karne par jab bhi page ke link par click karenge NavLink us element ko automaticaly active class assign kar dega jisga use hum Navlink ke style ke liye kar sakate hai.
          nav link ke andar customized className bhi define kar sakte hai uske liye ek callback function ka bhi use kar sakte hai.
          */}
          <li>
            <NavLink
              to="/posts"
              className={(obj) => {
                return obj.isActive ? "NavNewClass" : null;
              }}>
              Posts
            </NavLink>
          </li>
          <li>
            <NavLink
              to="contact"
              className={(obj) => {
                return obj.isActive ? styles.classByCssModule : null;
              }}>
              Contact
            </NavLink>
          </li>
          {/* Login Button  */}
          {!isLoggedIn && (
            <li>
              <NavLink
                to="login"
                className={(obj) => {
                  return obj.isActive ? styles.classByCssModule : null;
                }}>
                Login
              </NavLink>
            </li>
          )}

          {/* Logout Button  */}
          {isLoggedIn && (
            <li>
              <NavLink
                to="login"
                onClick={() => {
                  setIsloggedIn(false);
                }}
                className={(obj) => {
                  return obj.isActive ? styles.classByCssModule : null;
                }}>
                Logout
              </NavLink>
            </li>
          )}
        </ul>
      </nav>
      <br />
      <hr />
      <br />
      <main>
        <h2>This is main Content</h2>
        <Outlet />
      </main>
    </div>
  );
}

export default RootLayout;
