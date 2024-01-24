import {URLS} from "../config/urls.js";


export function Admin() {

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
        <div>
            <h1>Admin</h1>
          <form onSubmit={createNewPost}>
            <input type="text"
                   name="title"
                   placeholder={'post title'}/>
            <textarea placeholder={'post content'}
                      name="body"
            ></textarea>
            <button type='submit'>create post</button>
          </form>
        </div>
    )
}
