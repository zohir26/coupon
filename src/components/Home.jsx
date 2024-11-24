import { useLoaderData } from "react-router";
import { NavLink } from "react-router";
const Home = () => {
  const brands = useLoaderData(); // All brands data

  if (!brands || brands.length === 0) {
    return <h2>No brands available</h2>; // Fallback for missing data
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 p-6">
      {brands.map(brand => (
        <div key={brand._id} className="card bg-base-100 w-auto shadow-xl">
          <figure className="px-10 pt-10">
            <img
              src={brand.brand_logo}
              alt={brand.brand_name}
              className="rounded-xl"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">{brand.brand_name}</h2>
            <p>{brand.coupons[0]?.description || "No coupon available"}</p>
            <NavLink
              to={`/categories/${brand._id}`}
              className="btn bg-pink-300 hover:text-black"
            >
              Get the Coupon
            </NavLink>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Home;
