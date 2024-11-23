import { useLoaderData } from "react-router";
import { NavLink } from "react-router";
const CategoryCoupon = () => {
  const brand = useLoaderData(); // Single brand object

  if (!brand || Object.keys(brand).length === 0) {
    return <h2>No brand details available</h2>; // Fallback for missing data
  }

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold">{brand.brandName}</h2>
      <img
        src={brand.brandLogo}
        alt={brand.brandName}
        className="w-32 h-32 object-cover my-4"
      />
      <p className="text-gray-600">{brand.description}</p>
      <p className="font-semibold">Rating: {brand.rating} ⭐</p>
      {brand.saleIsOn && (
        <p className="text-red-500 font-bold animate-bounce">Sale is On!</p>
      )}
      <NavLink className="btn bg-pink-300">Get the Coupon</NavLink>
    </div>
  );
};

export default CategoryCoupon;
