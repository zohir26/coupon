import { createBrowserRouter } from "react-router";
import HomeLayout from "../layout/HomeLayout";
import Home from "../components/Home";
import CategoryCoupon from "../page/CategoryCoupon";
import CouponDetails from "../page/CouponDetails";
import AuthLayout from "../layout/AuthLayout";
import Login from "../page/Login";
import Register from "../page/Register";
import PrivateRoute from "./PrivateRoute";
import ErrorPage from "../page/ErrorPage";
import Profile from "../page/Profile";
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: async () => {
          const response = await fetch("/CategoryDetails.json");
          if (!response.ok) {
            throw new Error("Failed to fetch data");
          }
          return await response.json(); // Return all brand data
        },
        
      },

      {
        path: "/categories/:id",
        element: <CategoryCoupon></CategoryCoupon>,
        loader: async ({ params }) => {
          const response = await fetch("/CategoryDetails.json");
          if (!response.ok) {
            throw new Error("Failed to fetch data");
          }
          const allData = await response.json();
          const brand = allData.find(item => item._id === params.id);
          return brand || {}; // Return empty object if brand not found
        },
      },
      {
        path: "/coupon/:id",
        element: <PrivateRoute>
          <CouponDetails></CouponDetails>
        </PrivateRoute>,
        loader: async ({ params }) => {
          const response = await fetch("/CategoryDetails.json");
          if (!response.ok) {
            throw new Error("Failed to fetch data");
          }
          const allData = await response.json();
          const brand = allData.find(item => item._id === params.id);
          return brand || {}; // Return empty object if brand not found
        },
      },

    
    ],
  },
  {
    path: "auth",
    element: <AuthLayout></AuthLayout>,
    children: [
      {
        path: "/auth/login",
        element: <Login></Login>,
      },
      {
        path: "/auth/register",
        element: <Register></Register>,
      },

    ],
  },
  {
    path:'/profile',
    element: <PrivateRoute>
      <Profile></Profile>
    </PrivateRoute>
  },
  {
    path: "*",
    element: <ErrorPage></ErrorPage>,
  },
]);

export default router;
