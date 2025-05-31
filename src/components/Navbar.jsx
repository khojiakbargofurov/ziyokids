import React from "react";
import Logo from "../assets/logo.svg";
import Menu from "../assets/Menu.svg";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div>
      <div className="navbar max-w-6xl p-4 px-4 mx-auto bg-base-100 shadow-sm">
        <div className="navbar-start">
          <a href="/" className="w-xs">
            <img src={Logo} className="max-w-40" alt="logo" />
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal gap-4 text-xl">
            <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/subjects">Fanlar</Link>
              </li>
              <li>
                <Link to="/tests">Testlar</Link>
              </li>
              <li>
                <Link to="/games">O’yinlar</Link>
              </li>
          </ul>
        </div>
        <div className="navbar-end ">
          <div className="hidden lg:flex gap-4">
                <Link to="/login" className="btn btn-ghost rounded transition duration-200">Login</Link>
                <Link to="/register" className="btn rounded bg-[#FF553E] transition duration-200 text-white ">
                  Sign up
                </Link>
          </div>
          <div className="dropdown dropdown-bottom dropdown-end py-8">
            <div tabIndex={0} role="button" className="lg:hidden">
              <img src={Menu} alt="menu" />
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content menu bg-base-100 gap-1 rounded-box z-0 w-90 h-[78vh] shadow-sm border-0"
            >
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/subjects">Fanlar</Link>
              </li>
              <li>
                <Link to="/tests">Testlar</Link>
              </li>
              <li>
                <Link to="/games">O’yinlar</Link>
              </li>
              <li>
                <Link to="/login" className="btn btn-ghost rounded w-full ">Login</Link>
              </li>
              <li>
                <Link to="/register" className="btn rounded bg-[#FF553E] w-full text-white ">
                  Sign up
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
