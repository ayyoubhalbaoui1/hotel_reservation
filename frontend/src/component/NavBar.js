import React from 'react';


export default function NavBar () {
    return(
        <nav  class="navbar">
            <div class="collapse navbar-collapse">
            <ul class="nav navbar-nav navbar-right">
                <li>
                <a class="navbar-brand" style={{color: "Red"}} href="/">Home</a>
                </li>
                <li>
                <a class="navbar-brand"style={{color: "red"}} href="/Commands">Reservation List</a>
                </li>
            </ul>
            </div>
        </nav>
    )
}