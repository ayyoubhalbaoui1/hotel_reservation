import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link, useHistory } from "react-router-dom";
import Login from './login'

function Header () {

    

    return (
        <nav className="navbar navbar-expand-lg navbar-light fixed-top">
            <div className="container">
                <Link className="navbar-brand" to={"/sign-in"}>Hotel Booking</Link>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                    <ul className="navbar-nav ml-auto">
                    {/* <li className="nav-item">
                                <Link className="nav-link " to={"/admin-dashboard"}>Admin Dashboard</Link>
                            </li> */}
                        <li className="nav-item">
                            <Link className="nav-link" >LogOut</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Header