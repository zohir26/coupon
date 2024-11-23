import { createBrowserRouter } from "react-router";
import HomeLayout from "../layout/HomeLayout";
import CategoryCoupon from "../page/CategoryCoupon";


const router = createBrowserRouter([
    {
      path: "/",
      element: <HomeLayout></HomeLayout>,
      children: [
        {
          path: "/categories/:id",
          element: <CategoryCoupon></CategoryCoupon>,
          loader: async ({ params }) => {
            try {
              const response = await fetch("/public/CategoryDetails.json"); // Correct path
              if (!response.ok) {
                throw new Error("Failed to fetch data");
              }
              const allData = await response.json();
              const brand = allData.find(item => item.id === parseInt(params.id));
              return brand || {}; // Return empty object if brand not found
            } catch (error) {
              console.error("Error fetching category details:", error);
              return {}; // Return fallback data
            }
          },
        },
      ],
    },
    {
      path: "/coupon",
      element: <h1>Coupon details</h1>,
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
  