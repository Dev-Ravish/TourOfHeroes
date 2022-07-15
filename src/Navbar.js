import { Link } from "react-router-dom";

const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>Heroes of the Universe</h1>
            <div className="links">
                <Link to="/">Dashboard</Link>
                <Link to="/Heroes">Heroes</Link>
            </div>
        </nav>
     );
}
 
export default Navbar;