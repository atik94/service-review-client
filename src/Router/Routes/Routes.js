import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import AddService from "../../Pages/AddService/AddService";
import Home from "../../Pages/Home/Home/Home";
import ServicesAll from "../../Pages/Home/Services/ServicesAll";
import ViewDetails from "../../Pages/Home/ViewDetails/ViewDetails";
import Login from "../../Pages/Login/Login";
import Myreviews from "../../Pages/MyReviews/Myreviews";
import Reviews from "../../Pages/Reviews/Reviews";
import SignUp from "../../Pages/SignUp/SignUp";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/addservice",
        element: <AddService></AddService>,
      },
      {
        path: "/viewDetails/:id",
        element: <ViewDetails></ViewDetails>,
        loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`),
      },
      {
        path: "/reviews",
        element: <Myreviews></Myreviews>,
      },
      {
        path: "/review",
        element: <Reviews></Reviews>,
      },
      {
        path: "/services",
        element: <ServicesAll></ServicesAll>,
      },
    ],
  },
]);
export default router;
