import { NavLink, useLoaderData } from "react-router";
import NavBar from "../components/NavBar";
import Slider from "../components/Slider";
import TopBrands from "../components/TopBrands";

const CouponDetails = () => {
  const brand = useLoaderData();

  if (!brand || Object.keys(brand).length === 0) {
    return (
      <div className="text-center py-10">
        <h2 className="text-2xl font-bold">No coupon details available</h2>
        <NavLink to="/" className="text-blue-500 underline mt-4">Return Home</NavLink>
      </div>
    );
  }

  return (
    <div>
     
      <div className="w-11/12 mx-auto">
        <div className="flex flex-col justify-center items-center space-y-4">
          <h2 className="text-3xl font-bold mb-4">{brand.brand_name}</h2>
          <img
            src={brand.brand_logo}
            alt={brand.brand_name}
            className="w-[400px] h-[400px] object-cover my-4"
          />
          <p className="text-gray-600">{brand.description}</p>
          <p className="font-semibold">Rating: {brand.rating} ⭐</p>
          <p>Category: {brand.category}</p>
          <p>
            Shop Link:{" "}
            <a
              href={brand.shop_Link}
              target="_blank"
              rel="noreferrer"
              className="text-blue-500 underline"
            >
              {brand.shop_Link}
            </a>
          </p>
          {brand.isSaleOn && (
            <p className="text-red-500 font-bold animate-bounce">Sale is On!</p>
          )}
        </div>
        <div className="grid grid-cols-1">
          <h3 className="mt-6 text-2xl font-semibold">Available Coupons:</h3>
          <div>
            {brand.coupons?.map((coupon, index) => (
              <div key={index} className="mt-4 p-4 border border-gray-200 rounded-md">
                <p>
                  <span className="font-bold">Code:</span> {coupon.coupon_code}
                </p>
                <p>
                  <span className="font-bold">Description:</span> {coupon.description}
                </p>
                <p>
                  <span className="font-bold">Expiry Date:</span> {coupon.expiry_date}
                </p>
                <p>
                  <span className="font-bold">Condition:</span> {coupon.condition}
                </p>
                <p>
                  <span className="font-bold">Type:</span> {coupon.coupon_type}
                </p>
              </div>
            ))}
            <div className="w-11/12 py-8">
              <NavLink
                to="/"
                className="btn bg-pink-300 hover:text-black w-[50%] flex justify-center items-center mx-auto"
              >
                Return Home
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CouponDetails;
