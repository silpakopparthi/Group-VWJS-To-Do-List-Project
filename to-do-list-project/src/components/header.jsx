import React from "react";
//import Logo from './images/todolist.png';
// import { Link } from "react-router-dom";
function Header({ navigatePage }) {

  const onLinkClick = (e) => {
    console.log(e.target.dataset.page);
    navigatePage(e.target.dataset.page);
  }
  return (
    <div className="header">
      {/* <Link to="/">
        <img src="/images/todolist.png" className="logo" alt="logo" />
      </Link> */}
      {/* <img src= {Logo} alt ="logo"/> */}
      <h1 className="header-title">To Do List</h1>
      <nav className="nav-links">
        <ol>
          <li>
            <a href="#home" data-page="home" onClick={onLinkClick}>Home</a>
            {/* <Link to="/">Home</Link> */}
          </li>
          <li>
            <a href="#contact" data-page="info" onClick={onLinkClick}>Info</a>
            {/* <Link to="/info">Info</Link> */}
          </li>
        </ol>
      </nav>
    </div>
  );
}
export default Header;






