import {Link} from "react-router-dom";
import {useContext} from "react";
import {AuthContext} from "../context/auth-context.js";

export function Navbar() {
  const {user, signOut} = useContext(AuthContext);

  return (
      <nav className="navbar navbar-expand-lg bg-primary">
        <div className="container">

          {user ? (
              <span>
                <span className='navbar-brand'>Hi {user.name}</span>
                <span onClick={signOut}>Sign out</span>
              </span>

          ) : (
              <Link className="nav-link" to={"/sign-in"}>Sign in</Link>
          )}


          <ul className="navbar-nav">


            <li className="nav-item">
              <Link className="nav-link" to={"/posts"}>Posts</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"/About"}>About</Link>
            </li>


            {user && (
                <li className="nav-item">
                  <Link className="nav-link" to={"/admin"}>Admin</Link>
                </li>)}

          </ul>

        </div>
      </nav>
  )
}
