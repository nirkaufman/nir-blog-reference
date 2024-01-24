import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";

export function Post() {
  const { id } = useParams();
  const [ post, setPost ] = useState();

  useEffect(() => {
    fetch(`http://localhost:3000/posts/${id}`)
      .then(response => response.json())
      .then(post => setPost(post))
  }, []);

  if(!post) {
    return <div>Loading post...</div>
  }

    return (
        <div>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
        </div>
    )
}
