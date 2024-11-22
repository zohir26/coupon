import Slider from "../components/Slider";

import NavBar from "../components/NavBar";


const HomeLayout = () => {
    return (
        <div className="font-poppins">
            
            <div className="w-11/12 mx-auto p-4">
                {/* logo */}                
                 <NavBar ></NavBar>
                 <Slider></Slider>
                <main></main>
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