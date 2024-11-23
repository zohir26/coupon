import Marquee from "react-fast-marquee";
import { Link } from "react-router";

const TopBrands = () => {
   
    return (
        <div>
            <p className="font-bold text-3xl py-5">Top Brands</p>
            <div className="flex space-x-5 h-40 object-cover overflow-auto"> 
            <Marquee pauseOnHover="true">
              <Link to ="">
              <img className="w-40 h-20" src="https://i.ibb.co.com/ZLhNd9B/gadget-and-gear.png" alt="" />
              </Link>
              <Link to ="">
             <img className="w-40 h-20"  src="https://i.ibb.co.com/ZVVMn3x/Shwapno.png" alt="" />
             </Link>

             <Link to ="">
                <img className="w-40 h-20" src="https://i.ibb.co.com/vdpkbrd/rich-man.png" alt="" />
                </Link>
                <Link to ="">
                <img className="w-40 h-20" src="https://i.ibb.co.com/Qv3TRfS/biman-bd-airlines.png" alt="" />
                </Link>

                <Link to ="">
               <img className="w-40 h-20" src="https://i.ibb.co.com/TTy7DCQ/diamond-world.jpg" alt="" />
               </Link>

               <Link to ="">
                <img className="w-40 h-20" src="https://i.ibb.co.com/PTBx9Dh/partex-furniture.png" alt="" />
                </Link>

                <Link to ="">
           <img className="w-40 h-20" src="https://i.ibb.co.com/FXtCPnj/gentel-park.png" alt="" />
            </Link>
            <Link to="">
              <img className="w-40 h-20" src="https://i.ibb.co.com/s1f38ds/cinema-ticket-1075066-1280.png" alt="" />
              </Link>
              <Link to="">
                <img className="w-40 h-20" src="https://i.ibb.co.com/hdBgNmR/applo-hospital.png" alt="" />
                </Link>
                <Link to ="">
             <img className="w-40 h-20" src="https://i.ibb.co.com/T2vJMm2/lotto.png" alt="" />
             </Link>
            </Marquee>
  
           
            
           
           
            
            
            </div>
           
        </div>

    );
};

export default TopBrands;


