import React from 'react'
import ReactDOM from 'react-dom/client'
import {RouterProvider , createBrowserRouter} from "react-router-dom"
import App from './App.jsx'
import './index.css'

import Home from "./pages/Home.jsx"
import Products from "./pages/Products.jsx"
import Cart from "./pages/Cart.jsx"
import Login from "./pages/Login.jsx"
import Signup from "./pages/Signup.jsx"
import About from "./pages/About.jsx"

const router = createBrowserRouter([
  {
    path: "/",
    element : <App />,
    children : [
      {
        path: "/", element : <Home /> 
      },
      {
        path: "/about", element : <About /> 
      },
      {
        path: "/products", element : <Products />
      },{
        path : "/cart" , element : <Cart/>
      },{
        path: "/login" , element : <Login />
      },{
        path: "/signup" ,element : <Signup />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
