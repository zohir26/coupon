import { createBrowserRouter } from "react-router";
import HomeLayout from "../layout/HomeLayout";


const router= createBrowserRouter([
    {
        path:"/",
        element:<HomeLayout></HomeLayout>
    },
    {
        path:"/coupon",
        element: <h1>coupon details</h1>
    },
    {
        path:"auth",
        element:<h1>Login</h1>
    },
    {
        path:"*",
        element:<h1>error</h1>
    }
])

export default router;