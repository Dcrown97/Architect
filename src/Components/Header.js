import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
    return (

        <div className="w3-top">
            <div className="w3-bar w3-white w3-wide w3-padding w3-card">
                <Link to="/" className="w3-bar-item w3-button">
                    <b>BR</b> Architects
                </Link>
                {/* Float links to the right. Hide them on small screens */}
                <div className="w3-right w3-hide-small">
                    <Link to="/project" className="w3-bar-item w3-button">
                        Projects
                    </Link>
                    <Link to="/about" className="w3-bar-item w3-button">
                        About
                    </Link>
                    <Link to="/contact" className="w3-bar-item w3-button">
                        Contact
                    </Link>
                    <Link to="/map" className="w3-bar-item w3-button">
                        Map
                    </Link>
                </div>
            </div>
        </div>

    )
}

export default Header
