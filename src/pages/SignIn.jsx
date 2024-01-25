import {useContext} from "react";
import {AuthContext} from "../context/auth-context.js";

// Sign-in form is responsible for:
// rendering s signIn form, collecting the data from the form, and calling the signIn function from the context
export function SignInForm() {
  const {signIn} = useContext(AuthContext);


  function handleSubmit(evt) {
    evt.preventDefault();

    const email = evt.target.email.value;
    const password = evt.target.password.value;

    signIn(email, password);
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
