import { FaFacebook,FaTwitter,FaGithub } from "react-icons/fa";
import { Link } from "react-router";

const Footer = () => {
    return (
        <div>
            <footer className="footer footer-center bg-slate-300 text-black p-10">
  <aside>

    <p className="font-bold ">
      Coupons PRO
      <br />
      Providing reliable coupon since 1992
    </p>
    <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
  </aside>
  <nav className="flex w-30 ">
        <Link to = "https://www.facebook.com/"><FaFacebook className="w-20 h-10"></FaFacebook></Link>
        <Link to="https://x.com/?lang=en"> <FaTwitter className="w-20 h-10"> </FaTwitter> </Link>
        <Link to = "https://github.com/zohir26"><FaGithub className="w-20 h-10"></FaGithub></Link>
         
          
  </nav>
</footer>
        </div>
    );
};

export default Footer;