import React, { useState } from 'react'
import './NavBar.styles.scss'
import { Link } from 'react-router-dom'

const NavBar = () => {
    const [isHamburgerOpen, setIsHamburgerOpen] = useState(false)

    // this will close the menu once a link is clicked
    const closeHamburger = () => {
        setIsHamburgerOpen(false)
    }

    return (
        <div className="nav-bar">
            <div className="nav-home">
                <Link to="/" onClick={closeHamburger}>Miles</Link>
            </div>
            <div className="hamburger-container">

                <button
                    className={`hamburger ${isHamburgerOpen ? 'open' : ''}`}
                    onClick={() => setIsHamburgerOpen(!isHamburgerOpen)} // Toggles the menu
                >
                    {/* These are the three lines of the hamburger icon */}
                    <span id="top"></span>
                    <span id="middle"></span>
                    <span id="bottom"></span>
                </button>
                <div className={`hamburger-links ${isHamburgerOpen ? 'open' : ''}`}>
                    <ul>
                        <li>
                            <Link to="/logs" onClick={closeHamburger}>Logs</Link>
                        </li>
                        <li>
                            <Link to="/challenges" onClick={closeHamburger}>Challenges</Link>
                        </li>
                        <li>
                            <Link to="/land-marks" onClick={closeHamburger}>Land Marks</Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className={`nav-links`}>
                <ul>
                    <li>
                        <Link to="/logs" onClick={closeHamburger}>Logs</Link>
                    </li>
                    <li>
                        <Link to="/challenges" onClick={closeHamburger}>Challenges</Link>
                    </li>
                    <li>
                        <Link to="/land-marks" onClick={closeHamburger}>Land Marks</Link>
                    </li>
                </ul>
            </div>
        </div >
    )
}

export default NavBar