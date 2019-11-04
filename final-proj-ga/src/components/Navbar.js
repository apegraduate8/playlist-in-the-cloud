import React from 'react';
import { Link } from 'react-router-dom'

// have to check this file!!!
<<<<<<< Updated upstream
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
=======
const Navbar = () => {
    const streamTop = {
        zIndex: "3",
        position: "fixed",
        top: "58px",
        left: "-10px",
        width: "360px",
        height: "8vh",
        backgroundImage: "url(final-project-ga/stream-05.svg)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "90%",
        backgroundPosition: "50% 30%",
        opacity: ".95"
    }

    return(
        <nav>
            <div className="streamTop" style={streamTop} > </div>
            <ul>
                <li onClick={() => GlobalStore.getOut()}> sign out </li>
            </ul>
        </nav>
>>>>>>> Stashed changes
    )
}

export default Navbar;

