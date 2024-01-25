import {Navbar} from "./Navbar.jsx";
import {Outlet} from "react-router-dom";
import {AuthProvider} from "../context/auth-provider.jsx";

export function Layout() {
  return (
      <div>
        <AuthProvider>
        <Navbar/>

          <Outlet/>

          <footer>
            <hr/>
            My website
          </footer>
        </AuthProvider>
      </div>
  )
}
