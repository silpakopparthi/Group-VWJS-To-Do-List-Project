import React from "react";
//import Logo from './images/todolist.png';
import { Link } from "react-router-dom";
function Header() {
  return (
    <div className="header">
      <Link to="/">
        <img src="./images/todolist.png" className="logo" alt="logo" />
      </Link>
      <h1>To Do List</h1>
      <nav className="nav-links">
        <ol>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/info">Info</Link>
          </li>
        </ol>
      </nav>
    </div>
  );
}
export default Header;






