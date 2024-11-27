import { NavLink, useNavigate } from "react-router";


const ErrorPage = () => {
 const navigate =useNavigate()
    return (
        <div className="w-[50%] mx-auto">
            <h2 className="text-4xl bold text-center mb-10"> You have given a wrong URL</h2>
            <NavLink className={`bg-primary btn flex rounded-xl text-white font-semibold `} to="/"  >Back to home page</NavLink>
        </div>
    );
};

export default ErrorPage;