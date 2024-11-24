import Marquee from "react-fast-marquee";
import { Link } from "react-router";

const TopBrands = () => {
  const brands = [
    { _id: 1, logo: "https://i.ibb.co.com/ZLhNd9B/gadget-and-gear.png" },
    { _id: 2, logo: "https://i.ibb.co.com/ZVVMn3x/Shwapno.png" },
    { _id: 3, logo: "https://i.ibb.co.com/vdpkbrd/rich-man.png" },
    { _id: 4, logo: "https://i.ibb.co.com/Qv3TRfS/biman-bd-airlines.png" },
    { _id: 5, logo: "https://i.ibb.co.com/TTy7DCQ/diamond-world.jpg" },
    { _id: 6, logo: "https://i.ibb.co.com/PTBx9Dh/partex-furniture.png" },
    { _id: 7, logo: "https://i.ibb.co.com/FXtCPnj/gentel-park.png" },
    { _id: 8, logo: "https://i.ibb.co.com/s1f38ds/cinema-ticket-1075066-1280.png" },
    { _id: 9, logo: "https://i.ibb.co.com/hdBgNmR/applo-hospital.png" },
    { _id: 10, logo: "https://i.ibb.co.com/T2vJMm2/lotto.png" },
  ];

  return (
    <div className="w-11/12 mx-auto">
      <p className="font-bold text-3xl py-5">Top Brands</p>
      <div className="flex space-x-5 h-40 object-cover overflow-auto">
        <Marquee pauseOnHover={true}>
          {brands.map((brand) => (
            <Link key={brand._id} to={`/categories/${brand._id}`}>
              <img
                className="w-40 h-20"
                src={brand.logo}
                alt={`Brand ${brand._id}`}
              />
            </Link>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default TopBrands;
