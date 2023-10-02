import { createBrowserRouter } from "react-router-dom";
import MainLayOut from "../../Layout/MainLayOut";
import Login from "../../Pages/Login";
import Register from "../../Pages/Register";
import Home from "../../Pages/Home";

const router = createBrowserRouter([
    {
      path: '/',
      element: <MainLayOut></MainLayOut>,
      children: [
        {
          path: '/',
          element: <Home></Home>
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/register',
          element: <Register></Register>
        }
      ]
    }
  ])

export default router;