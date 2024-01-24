import {Layout} from "./layout/Layout.jsx";
import {Home} from "./pages/Home.jsx";
import {Posts} from "./pages/Posts.jsx";
import {ErrorPage} from "./layout/Error.jsx";
import {Post} from "./pages/Post.jsx";
import {About} from "./pages/About.jsx";
import {loadAllPosts} from "./loaders/posts.js";
import {Admin} from "./pages/Admin.jsx";

export const routes = [
  {
    path: "/",
    element: <Layout/>, // This is nested routes
    children: [
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "/posts",
        element: <Posts/>,
        errorElement: <ErrorPage/>,
        loader: loadAllPosts
      },
      {
        path: "/posts/:id",
        element: <Post/>
      },
      {
        path: '/about',
        element: <About/>
      },
      {
        path: '/admin',
        element: <Admin/>
      }
    ]
  }
]
