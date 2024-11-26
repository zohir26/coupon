import { Outlet } from "react-router";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";


const AuthLayout = () => {
    return (
        <div>
            <NavBar></NavBar>
         
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default AuthLayout;