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
            <div className={`nav-links ${isHamburgerOpen ? 'open' : ''}`}>
                <ul>
                    <li>
                        <Link to="/" onClick={closeHamburger}>Logs</Link>
                    </li>
                    <li>
                        <Link to="/" onClick={closeHamburger}>Challenges</Link>
                    </li>
                    <li>
                        <Link to="/" onClick={closeHamburger}>Land Marks</Link>
                    </li>
                </ul>
            </div>
        </div >
    )
}

export default NavBar