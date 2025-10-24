import { createBrowserRouter } from "react-router";
import Homelayouts from "../Layouts/Homelayouts";
import Home from "../Pages/Home";
import Plants from "../Pages/Plants";
import Profile from "../Pages/Profile";
import { Children } from "react";
import Login from "../Components/Login";
import Register from "../Components/Register";
import PrivateRoute from "./PrivateRoute";
import PlantDetails from "../Components/PlantDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homelayouts></Homelayouts>,
    children: [
      {
        index: true,
        element: <Home></Home>,
        loader: () => fetch("/plants.json"),
      },
      {
        path: "/plants",
        element: <Plants></Plants>,
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
        path: "/plant-details/:id",
        element: (
          <PrivateRoute>
            <PlantDetails></PlantDetails>
          </PrivateRoute>
        ),
      },
    ],
  },

  {
    path: "/*",
    element: <h1>error 404</h1>,
  },
]);

export default router;
