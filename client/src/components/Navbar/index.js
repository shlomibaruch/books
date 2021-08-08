import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'
export const Navbar = () => {
    return (
        <nav className="navbar-container">
            <ul className="ul-list">
                <li>
                    {/* <Link className="nav-link" to="/collections">Search Books</Link> */}
                </li>
                <li><Link className="nav-link" to="/search-book">Search Book</Link></li>
            </ul>
        </nav>
    )
}
