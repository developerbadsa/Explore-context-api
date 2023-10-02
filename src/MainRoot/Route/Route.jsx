import { createBrowserRouter } from "react-router-dom";
import MainLayOut from "../../Layout/MainLayOut";
import Login from "../../Pages/Login";
import Register from "../../Pages/Register";
import Home from "../../Pages/Home";
import PrivateRoute from "../Private_Root/PrivateRoute;";

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
          element: <PrivateRoute><Login></Login> </PrivateRoute>
        },
        {
          path: '/register',
          element: <Register></Register>
        }
      ]
    }
  ])

export default router;