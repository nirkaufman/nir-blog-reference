import {Navbar} from "./Navbar.jsx";
import {Outlet} from "react-router-dom";
import {useContext} from "react";
import {BlogContext} from "../context/blog-context.js";

export function Layout() {
  const {state} = useContext(BlogContext);

  return (
      <div>
        <Navbar/>
          <Outlet/>

          <footer>
            {state.errorMsg && (<div className='card bg-danger'>{state.errorMsg}</div>)}
            <hr/>
            My website
          </footer>
      </div>
  )
}
