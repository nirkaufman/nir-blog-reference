import {Link} from "react-router-dom";

export function ErrorPage({error}) {
  return (
      <div>
        <h1>Something went wrong!</h1>
        <Link to={'/'}>Go back Home!</Link>
        <pre>{JSON.stringify(error, null , 2)}</pre>
      </div>
  )
}
