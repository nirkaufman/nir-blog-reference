import {Link} from "react-router-dom";
import {Navbar} from "../layout/Navbar.jsx";

export function Home() {
  return (
      <div className="container">

        <section className="py-5 text-center container">
          <div className="row py-lg-5">
            <div className="col-lg-6 col-md-8 mx-auto">
              <h1 className="fw-light textLg">Hello, I'm Nir Kaufman</h1>
              <p className="lead text-body-secondary">
                I'm a software architect, consultant, and international speaker.
                I'm the author of "React Native in Action", and the host of the "React Native Radio" podcast.
              </p>
              <p>
                <Link to="/posts" className="btn btn-primary my-2">Read my blog!</Link>
              </p>
            </div>
          </div>
        </section>
      </div>
  )
}
