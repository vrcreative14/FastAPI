
export default function Navbar(isAuthenticated){
return(
    <>
    {isAuthenticated ?
    <div className="navbar">
    <div className="navbar-items"><a href="/login">Create Blog</a></div>
    <div className="navbar-items"><a href="/blogs">View Blogs</a></div>
    <div className="navbar-items"><a href="/blogs">Favourites</a></div>
    <div className="navbar-items"><a href="/contact-us">Help</a></div>
</div>
    :    
    <div className="navbar">
    <div className="navbar-items"><a href="/login">Login/Signup</a></div>        
    <div className="navbar-items"><a href="/blogs">Blogs</a></div>
    <div className="navbar-items"><a href="/contact-us">Contact Us</a></div>
</div>
    }
    </>
)
}