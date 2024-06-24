import React from 'react';
//import Logo from './images/todolist.png';

function Header(){
    return(
<div className="header">
        <img src="./images/todolist.png" className='logo' alt ="logo" /> 
        <h1>To Do List</h1>
        <nav className="nav-links">
        <ol>
            <li><a href="#home">Home</a></li>

            <li><a href="#info">Info</a></li>
        </ol>
        </nav>
        </div>
    )
}

export default Header;