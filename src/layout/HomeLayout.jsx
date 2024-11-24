import Slider from "../components/Slider";

import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import TopBrands from "../components/TopBrands";
import LeftNavbar from "../components/layout-component/LeftNavbar";
import { Outlet } from "react-router";


const HomeLayout = () => {
    return (
        <div className="font-poppins">

            <div className=" mx-auto ">
                {/* logo */}

                <NavBar ></NavBar>

                <Slider></Slider>

                <TopBrands></TopBrands>



                <main className="grid grid-cols-12 mx-auto pt-5 w-11/12">
                    <aside className="col-span-3">
                        <LeftNavbar></LeftNavbar>
                    </aside>
                    <section className="col-span-9">
                    <Outlet></Outlet>
                    </section>
                        
                </main>
                <Footer></Footer>
            </div>
            {/* <div>
                navbar
            </div> */}
            {/* login and register */}
            {/* <div>
                <div>
                    login
                </div>
                <div>
                    register
                </div>
            </div> */}
        </div>
    );
};

export default HomeLayout;