import {Link} from "react-router-dom";
import {useContext} from "react";
import {BlogContext} from "../context/blog-context.js";

export function Navbar() {
  const {state} = useContext(BlogContext);

  return (
      <nav className="navbar navbar-expand-lg bg-primary">
        <div className="container">

          {state.user ? (
              <span>
                <span className='navbar-brand'>Hi {state.user.name}</span>
                <span>Sign out</span>
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


            {state.user && (
                <li className="nav-item">
                  <Link className="nav-link" to={"/admin"}>Admin</Link>
                </li>)}

          </ul>

        </div>
      </nav>
  )
}
