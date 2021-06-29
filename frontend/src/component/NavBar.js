
export default function NavBar () {
    return(
        <nav class="navbar">
            <div class="navbar-header">
            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#myNavbar">
                <i class="fas fa-bars fa-fw"></i>
                </button>
            <a class="navbar-brand" href="/">Home</a>
            </div>
            <div class="collapse navbar-collapse" id="myNavbar">
            <ul class="nav navbar-nav navbar-right">
                <li>
                <a href="/Commands">My Orders</a>
                </li>
            </ul>
            </div>
        </nav>
        
    )
}