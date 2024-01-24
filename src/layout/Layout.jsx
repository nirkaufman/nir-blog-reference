import {Navbar} from "./Navbar.jsx";
import {Outlet} from "react-router-dom";

export function Layout() {
  return (
    <div className="container-fluid">
      <Navbar />

      <Outlet />

      <footer>
        <hr/>
        My website
      </footer>
    </div>
  )
}
