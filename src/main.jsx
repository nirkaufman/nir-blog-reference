import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/global.css';
import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {routes} from "./routes.jsx";
import {StateProvider} from "./context/state-provider.jsx";


const router = createBrowserRouter(routes);

ReactDOM.createRoot(document.getElementById('root')).render(
    <StateProvider>
      <RouterProvider router={router} />
    </StateProvider>
)
