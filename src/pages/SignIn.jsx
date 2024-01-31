import {useContext} from "react";
import {BlogContext} from "../context/blog-context.js";
import {URLS} from "../config/urls.js";
import {ACTIONS} from "../state/events.js";

// Sign-in form is responsible for:
// rendering s signIn form, collecting the data from the form, and calling the signIn function from the context
export function SignInForm() {
  const {dispatch} = useContext(BlogContext);


  function handleSubmit(evt) {
    evt.preventDefault();

    const email = evt.target.email.value;
    const password = evt.target.password.value;


    signIn(email, password);
  }

  async function signIn(email, password) {
    const response = await fetch(URLS.BASE_URL + `/users/${email}`);
    const user = await response.json();

    if (user.password === password) {
      dispatch({ type: ACTIONS.SET_USER, payload: user })
    } else {
      dispatch({ type: ACTIONS.SET_ERROR, payload: 'Something went wrong' })

      setTimeout(() => {
        dispatch({ type: ACTIONS.SET_ERROR, payload: '' })
      }, 2000);

    }
  }

  function signOut() {
    dispatch({ type: ACTIONS.SET_USER, payload: null })
  }


  return (
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
          <input type="text"
                 name="email"
                 className="form-control"/>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Password</label>
          <input type="password"
                 name="password"
                 className="form-control"/>
        </div>
        <button type="submit" className="btn btn-primary">Sign In</button>
      </form>
  );
}
