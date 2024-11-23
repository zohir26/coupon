import { useEffect, useState } from "react";
import { NavLink } from "react-router";


const LeftNavbar = () => {
    const [category,setCategory] = useState([]);
    useEffect(()=>{
        fetch('/public/Category.json')
        .then((res)=> res.json())
        .then (data => setCategory(data))
    },[])
    return (
   
      <div>
           <h2 className="font-semibold mb-3 ">All Category ({category.length}) </h2>
           <div className="flex gap-3 flex-col">
            {
                category.map((categories)=> <NavLink to={`/categories/${categories.id}`}
                className="btn"
                key={categories.id}>{categories.brandName}
                </NavLink>)
            }
           </div>
        </div>
    );
};

export default LeftNavbar;
// { "id": 1, "brandName": "TechStore" },