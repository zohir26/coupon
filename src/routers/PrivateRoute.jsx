import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate, useLocation, useNavigate } from "react-router";
import Loading from "../page/Loading";


const PrivateRoute = ({children}) => {
 const {user,loading}=useContext(AuthContext);

 if (loading){
   return <Loading></Loading>
 };

 if (user && user?.email){
    return children;
 };
 return <Navigate to="/auth/login"></Navigate>;
    
};

export default PrivateRoute;