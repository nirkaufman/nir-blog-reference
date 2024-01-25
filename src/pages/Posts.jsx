import {Link, useLoaderData} from "react-router-dom";

export function Posts() {
  const posts = useLoaderData()

  return (
      <div className="container py-5">

        <h2 className="my-2">What's going on?</h2>

        <div className='list-group list-group-flush'>
          {posts.map(post => (

              <Link to={`/posts/${post.id}`}
                    className='list-group-item list-group-item-action ps-0'>
                {post.title}
              </Link>

          ))}
        </div>
      </div>
  )
}
