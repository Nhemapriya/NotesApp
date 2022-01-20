import React from 'react'
import {Link , NavLink} from 'react-router-dom'

const Navbar = () => {
    return (
        <div>
             <nav className="blue">
                <div className="nav-wrapper">
                <Link to = "/" className="brand-logo"> Hemnote </Link>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><NavLink to ="/favourites"> Favourites </NavLink></li>
                </ul>
                </div>
            </nav>
                    
        </div>
    )
}

export default Navbar
