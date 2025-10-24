import { createBrowserRouter } from "react-router";
import Homelayouts from "../Layouts/Homelayouts";
import Home from "../Pages/Home";
import Profile from "../Pages/Profile";
import { Children } from "react";
import Login from "../Components/Login";
import Register from "../Components/Register";
import PrivateRoute from "./PrivateRoute";
import PlantDetails from "../Components/PlantDetails";
import PlantsAll from "../Pages/PlantsAll";
import ForgetPassword from "../Pages/ForgetPassword";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homelayouts></Homelayouts>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: "/tree",
        element: <PlantsAll></PlantsAll>,
      },
      {
        path: "/profile",
        element: (
          <PrivateRoute>
            <Profile></Profile>
          </PrivateRoute>
        ),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "plant-details/:id",
        element: (
          <PrivateRoute>
            <PlantDetails></PlantDetails>
          </PrivateRoute>
        ),
      },
      {
        path: "/forget",
        element: <ForgetPassword></ForgetPassword>,
      },
    ],
  },

  {
    path: "/*",
    element: <h1>error 404</h1>,
  },
]);

export default router;
