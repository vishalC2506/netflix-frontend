import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../../../firebase/firebase";
import "./Nav.css";
const Nav = () => {
  const [show, handleShow] = useState(false);
  const history = useNavigate();
  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else handleShow(false);
  };
  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => window.removeEventListener("scroll", transitionNavBar);
  }, []);
  return (
    <>
      <nav className={`Navbar_main-transparent  ${show && "nav_black"}`}>
      <div className="nav__contents">
        <img
          onClick={() => history("/")}
          src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
          alt="load error"
          className="Navbar_main-image"
        />
        <button onClick={() => auth.signOut()} className="Navbar_main-SignOut">
          Sign Out
        </button>
        </div>
      </nav>
    </>
  );
};

export default Nav;
