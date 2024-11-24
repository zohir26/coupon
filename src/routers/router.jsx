import { createBrowserRouter } from "react-router";
import HomeLayout from "../layout/HomeLayout";
import Home from "../components/Home";
import CategoryCoupon from "../page/CategoryCoupon";
import CouponDetails from "../page/CouponDetails";

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
        element: <CouponDetails></CouponDetails>,
        loader: async ({ params }) => {
          const response = await fetch("/public/CategoryDetails.json");
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
    element: <h1>Login</h1>,
  },
  {
    path: "*",
    element: <h1>Error</h1>,
  },
]);

export default router;
