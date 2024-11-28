import { useContext } from "react";
import { Link } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";


const NavBar = () => {

  const {user,logOut}= useContext(AuthContext);
  const links = <>
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/brands">Brands</Link></li>
          <li><Link to="/profile">My Profile</Link></li>
          {
            user && user.email ? <div className="flex justify-center items-center gap-4">
              <img className="w-10 h-10 rounded-full" src={user?.photoURL} alt="" />
               <p>{user.displayName}</p>
            </div> : ""
          }
  </>
  
    return (
        <div className="navbar bg-[#A96685] text-white p-3">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow text-black">
                  {links}
                 
            </ul>
          </div>
          <Link to="/" className="btn btn-ghost text-xl animate-spin-slow">Coupon PRO </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 ">
            {links}
          </ul>
        </div>
        <div className="navbar-end flex gap-3 ">
         {
          user &&  user?.email ?
         <button onClick={logOut}
          className="hover:text-red-300">Log Out</button> 

          :<Link to="/auth/login" className="hover:text-red-300">Login</Link>
         }
         {
          user && user?.email ? "": <Link to="/auth/register" className="hover:text-red-300">Register</Link>
         }

          
        </div>
      </div>
    );
};

export default NavBar;