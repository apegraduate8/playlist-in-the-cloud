import React from 'react';
import { Link } from 'react-router-dom'

import '../App.css';

const Navbar = () => {

  return(
      <nav>
        <ul>
            <li> <Link to='/'> Home </Link> </li>
            <li> <Link to='/projects'> Projects </Link> </li>
            <li> <Link to='/about'> about </Link> </li>
        </ul>
      </nav>
    )
}

export default Navbar;

