import React from 'react';


export default function NavBar () {
    return(
        <nav  class="navbar">
            <div class="collapse navbar-collapse">
            <ul class="nav navbar-nav">
                <li>
                <a class="navbar" style={{color: "red"}} href="/">Home</a>
                </li>
                <li>
                <a class="navbar" style={{color: "red"}} href="/Commands">Reservation List</a>
                </li>
            </ul>
            </div>
        </nav>
    )
}