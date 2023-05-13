import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import SingUp from "../Pages/SingUp/SingUp";
import BookService from "../Pages/BookService/BookService";
import Bookings from "../Pages/Bookings/Bookings";
import PrivetRoute from "./PrivetRoute";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
          path:'/login',
          element:<Login></Login>
        },
        {
          path:'/singUp',
          element:<SingUp></SingUp>
        },
        {
          path:'/checkout/:id',
          element:<PrivetRoute><BookService></BookService></PrivetRoute>,
          loader: ({params})=> fetch(`http://localhost:4000/services/${params.id}`)
        },
        {
          path:'bookings',
          element:<PrivetRoute><Bookings></Bookings></PrivetRoute>
        }
      ]
  
    },
  ]);


  export default router;