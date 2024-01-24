import {Link} from "react-router-dom";
import '../styles/navbar.css';

export function Navbar() {
  return (
      <nav className='navbar bg-primary'>
        <div className="container-fluid">
          <Link className='navbar-brand' to={"/"}>Home</Link>


          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to={"/posts"}>Posts</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"/About"}>About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"/admin"}>Admin</Link>
            </li>
          </ul>


        </div>
      </nav>
  )
}
