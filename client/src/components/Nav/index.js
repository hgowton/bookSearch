import React from "react";
import { Link } from "react-router-dom"

function Nav() {
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link className="navbar-brand" href="/">
                Google Books List
            </Link>
        <div>
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link to="/"
                    className={
                        window.location.pathname === "/" || window.location.pathname === "/search"
                        ? "nav-link active"
                        : "nav-link"
                    }> 
                    Book Search
                    </Link>
                    <Link to="/saved"
                    className={
                        window.location.pathame === "/saved" 
                        ? "nav-link active"
                        : "nav-link"}>
                        Saved Books
                    </Link>
                </li>
            </ul>
        </div>
    </nav>
    )
}

export default Nav;