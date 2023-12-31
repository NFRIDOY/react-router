import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Contract from './pages/Contract.jsx';
import Error from './pages/Error.jsx';
import Users from './pages/Users.jsx';
import UserDetails from './components/Users/UserDetails.jsx';
import Posts from './pages/Posts.jsx';
// import { reactRouter } from './module/reactRouter.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error/>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        errorElement: <Error/>,
      },
      {
        path: "/about",
        element: <About />,
        errorElement: <Error/>,
      },
      {
        path: "/contract",
        element: <Contract />,
        errorElement: <Error/>,
      },
      {
        path: "/users",
        loader: () => fetch('https://jsonplaceholder.typicode.com/users') ,
        element: <Users />,
        errorElement: <Error/>,
      },
      {
        path: "/users/:userId",
        // loader: ({params}) => console.log(params.userId),
        loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
        element: <UserDetails />,
        errorElement: <Error/>,
      },
      {
        path: "/posts",
        loader: () => fetch(`https://jsonplaceholder.typicode.com/posts`),
        element: <Posts />,
        errorElement: <Error/>,
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    {/* <App /> */}
  </React.StrictMode>,
)
