import {AuthContext} from "./auth-context.js";
import {useState} from "react";
import {URLS} from "../config/urls.js";
import {useNavigate} from "react-router-dom";

export function AuthProvider({children}) {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  async function signIn(email, password) {
    const response = await fetch(URLS.BASE_URL + `/users/${email}`);
    const user = await response.json();

    if (user.password === password) {
      setUser(user);
      navigate("/")
    }
  }

  function signOut() {
    setUser(null);
  }

  //TODO: implement Sign Up.
  //TODO: will create a new user in the database. (POST)
  // TODO: reference: Admin create post form

  return (
      <AuthContext.Provider value={{ user, signIn, signOut }}>
        {children}
      </AuthContext.Provider>
  )
}
