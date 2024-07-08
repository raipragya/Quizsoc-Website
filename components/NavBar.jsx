import React from 'react';
import {Link} from 'react-router-dom'




export default function NavBar(){
    
    return(
    <nav className="navbar">
      <ul className="nav-links">
      <li><Link to="">Dashboard</Link></li>
      <li><Link to="">SignUp</Link></li>
      <li><Link to="/quizroom">QuizRoom</Link></li>
      <li><Link to="">Logout</Link></li>
      </ul>
    </nav>
    )
}