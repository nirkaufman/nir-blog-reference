import {URLS} from "../config/urls.js";
import {useContext} from "react";
import {AuthContext} from "../context/auth-context.js";


export function Admin() {
  const user = useContext(AuthContext);




  function createNewPost(evt) {
    evt.preventDefault();

    const title = evt.target.title.value;
    const body = evt.target.body.value;

    fetch(URLS.BASE_URL + URLS.POSTS, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
      body: JSON.stringify({
        title,
        body,
      }),
    })
  }


  return (
      <div className="container py-5">
        <h1>Hello {user.name}</h1>

        <form onSubmit={createNewPost} className="col-4">

          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Post title</label>
            <input type="text"
                   name="title"
                   className="form-control"/>
          </div>

          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Post body</label>
            <textarea className="form-control"
                      name="body"
            ></textarea>
          </div>
          <button className="btn btn-outline-primary" type='submit'>create post</button>
        </form>
      </div>
  )
}
