
import {Link, useLoaderData} from "react-router-dom";

export function Posts() {
  const posts = useLoaderData()

  return (
      <div>
        <h1>Posts</h1>
        <ul className='list-group'>
          {posts.map(post => (
              <li key={post.id} className='list-group-item'>
                <h2>
                  <Link to={`/posts/${post.id}`}>
                    {post.title}
                  </Link>
                </h2>
              </li>
          ))}
        </ul>
      </div>
  )
}
