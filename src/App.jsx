import {Home} from "./pages/Home.jsx";
import {Posts} from "./pages/Posts.jsx";
import {Post} from "./pages/Post.jsx";
import {useState} from "react";

function App() {
  const [page, setPage] = useState('home');

  return (
      <div>
        <button onClick={() => setPage('home')}>Home</button>
        <button onClick={() => setPage('posts')}>Posts</button>
        <button onClick={() => setPage('post')}>Post</button>
        <div>
          {page === 'home' && <Home/>}
          {page === 'posts' && <Posts/>}
          {page === 'post' && <Post/>}
        </div>
      </div>
  )
}

export default App
