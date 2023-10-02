import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import UserProvider from './Components/UserProvider.jsx'
import { RouterProvider} from 'react-router-dom'
import router from './MainRoot/Route/Route'




ReactDOM.createRoot(document.getElementById('root')).render(


  <React.StrictMode>
    <UserProvider>
      <RouterProvider router={router}></RouterProvider>
    </UserProvider>
  </React.StrictMode>,
)
