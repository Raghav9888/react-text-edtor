import React from "react";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

export default function Navbar(props) {
    const {navTitle = 'dfdf', mode, toggleMode} = props;
    return (
        <nav className={`navbar navbar-expand-lg bg-${mode}`} data-bs-theme={mode}>
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">{navTitle}</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/about">About</Link>
                        </li>
                    </ul>
                </div>

                <div className="form-check form-switch">
                    <input className="form-check-input" type="checkbox" role="switch" id="mode" onChange={toggleMode}/>
                    <label className={`form-check-label text-${mode === 'light' ? 'dark' : 'light'}`} htmlFor="mode">Dark
                        mode</label>
                </div>
            </div>
        </nav>
    )
}
// If we pass aa value in props then we check value is string or not
Navbar.prototype = {navTitle: PropTypes.string}