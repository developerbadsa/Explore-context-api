import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import UserProvider from './Components/UserProvider.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import MainLayOut from './Layout/MainLayOut.jsx'
import Login from './Pages/Login'
import Register from './Pages/Register'


const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayOut></MainLayOut>,
    children: [
      {
        path: '/',
        element: <Login></Login>
      },
      {
        path: '/',
        element: <Register></Register>
      }
    ]
  }
])






ReactDOM.createRoot(document.getElementById('root')).render(


  <React.StrictMode>
    <UserProvider>
      <RouterProvider router={router}></RouterProvider>
    </UserProvider>
  </React.StrictMode>,
)
