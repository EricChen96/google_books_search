import React from "react";
import { NavLink } from "react-router-dom";

function NavTabs() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <NavLink exact to="/" className="navbar-brand" activeClassName="active">
                Google Books
            </NavLink>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <header className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li class="nav-item">
                        <NavLink exact to="/search" className="nav-link" activeClassName="active">
                            Search
                        </NavLink>
                    </li>
                    <li class="nav-item">
                        <NavLink exact to="/saved" className="nav-link" activeClassName="active">
                            Saved
                        </NavLink>
                    </li>
                </ul>
            </header>
        </nav>
    )
}

export default NavTabs;