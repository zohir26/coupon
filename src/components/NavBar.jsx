import { Link } from "react-router";


const NavBar = () => {
  const links = <>
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/brands">Brands</Link></li>
          <li><Link to="/register">My Profile</Link></li>
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
          <a className="btn btn-ghost text-xl">Coupon PRO</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 ">
            {links}
          </ul>
        </div>
        <div className="navbar-end flex gap-3 ">
          <Link to="/login" className="hover:text-red-300">Login</Link>
          <Link to="/register" className="hover:text-red-300">Register</Link>
        </div>
      </div>
    );
};

export default NavBar;