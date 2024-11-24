import { useLoaderData } from "react-router";
import { NavLink } from "react-router";

const CategoryCoupon = () => {
  const brand = useLoaderData();

  if (!brand || Object.keys(brand).length === 0) {
    return <h2>No brand details available</h2>;
  }

  return (
    <div className="card bg-base-100 w-96 shadow-xl ml-8">
      <figure className="px-10 pt-10">
        <img
          src={brand.brand_logo}
          alt={brand.brand_name}
          className="rounded-xl"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="font-semibold">Discount: {brand.coupons[0]?.description || "No discount available"}</h2>
        <NavLink to={`/coupon/${brand._id}`} className="btn bg-pink-300 hover:text-black">
          Get the Coupon
        </NavLink>
      </div>
    </div>
  );
};

export default CategoryCoupon;
