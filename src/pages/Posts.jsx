import {Link} from "react-router-dom";
import {useContext} from "react";
import {loadAllPosts} from "../loaders/posts.js";
import {BlogContext} from "../context/blog-context.js";
import {ACTIONS} from "../state/events.js";

export function Posts() {
  const {state, dispatch} = useContext(BlogContext);


  function loadPosts() {
    dispatch({ type: ACTIONS.SET_LOADER, payload: true });

    loadAllPosts().then((posts) => {
      dispatch({ type: ACTIONS.LOAD_POSTS, payload: posts });
      dispatch({ type: ACTIONS.SET_LOADER, payload: false });
    })
  }


  return (
      <div className="container py-5">

        <h2 className="my-2">What's going on?</h2>

        <button onClick={loadPosts} className='btn btn-outline-primary'>Load my posts!</button>

        {state.loading && <div>Loading posts...</div>}

        <div className='list-group list-group-flush'>
          {state.posts.map(post => (

              <Link key={post.id} to={`/posts/${post.id}`}
                    className='list-group-item list-group-item-action ps-0'>
                {post.title}
              </Link>

          ))}
        </div>
      </div>
  )
}
