import {useContext} from "react";
import {BlogContext} from "../context/blog-context.js";

export function About() {
  const {state} = useContext(BlogContext);

    return (
        <div className="about">
            <h1>Nir wrote: {state.posts.length} posts!</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptas.</p>
        </div>
    )
}
