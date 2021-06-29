import React from 'react';


export default function NavBar () {
    return(
        <nav class="navbar">
            <div class="navbar-header">
            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse">
                <i class="fas fa-bars fa-fw"></i>
                </button>
            </div>
            <div class="collapse navbar-collapse">
            <ul class="nav navbar-nav navbar-right">
                <li>
                <a class="navbar-brand" href="/">Home</a>
                </li>
                <li>
                <a class="navbar-brand" href="/Commands">Reservation List</a>
                </li>
            </ul>
            </div>
        </nav>
        
       
    )
}