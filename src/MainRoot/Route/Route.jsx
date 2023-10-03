import { createBrowserRouter } from "react-router-dom";
import MainLayOut from "../../Layout/MainLayOut";
import Login from "../../Pages/Login";
import Register from "../../Pages/Register";
import Home from "../../Pages/Home";
import PrivateRoute from "../Private_Root/PrivateRoute;";
import Order from "../../Pages/Order";

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
        },
        {
          path: '/order',
          element:<PrivateRoute> <Order></Order></PrivateRoute>
        }
      ]
    }
  ])

export default router;