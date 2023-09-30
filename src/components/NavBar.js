import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBAR  = () => {
    return (
        <nav className="navbar">
            <h2>
            <Link to='/'>Blog</Link>
                
            </h2>
            <ul>
                <li>
                <Link to='/'>Home</Link>
                </li>
                <li>
                <Link to='/NewPost' className="new-btn">NewPost</Link>
                </li>
            </ul>

        </nav>
      );
}
 
export default NavBAR  ;

