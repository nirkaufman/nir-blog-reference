import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import postClasses from './post.module.css';


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
        <div className="container py-5">
          <div className="alert alert-warning">You are an admin! you can delete</div>
            <h1 className={postClasses.textLg}>
              {post.title}
            </h1>
            <p className={postClasses.blueTitle}>{post.body}</p>
        </div>
    )
}
