import React, { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import profileBg from "../assets/field-1728099_1280.jpg"
import { Link, NavLink } from "react-router";
const Profile = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Cover Section */}
      <div
        className="h-64 flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: "url('https://i.ibb.co.com/mcvNmnj/field-1728099-1280.jpg')", // Replace with your preferred image URL
        }}
      >
        <h1 className="text-4xl font-bold text-white bg-opacity-80 bg-black px-4 py-2 rounded-lg">
          Welcome {user?.displayName || "User"}!
        </h1>
      </div>

      {/* Profile Card Section */}
      <div className="flex justify-center mt-10">
        {user && user.email ? (
          <div className="card w-full max-w-md bg-white shadow-lg rounded-lg p-6">
            <div className="flex flex-col items-center">
              {/* User Photo */}
              <img
                className="w-24 h-24 rounded-full mb-4 border-4 border-gray-200"
                src={user?.photoURL || "https://via.placeholder.com/150"}
                alt="User Avatar"
              />
              {/* User Details */}
              <h2 className="text-2xl font-bold text-gray-700">{user?.displayName}</h2>
              <p className="text-gray-500">{user?.email}</p>
            </div>
          </div>
        ) : (
          <p className="text-red-500 text-center text-lg">No user information available. Please log in.</p>
        )}

      </div>
      <div className="flex justify-center items-center">
      <NavLink to="/" className="btn bg-red-200 mt-12 ">Return to Home</NavLink>
      </div>
    </div>
  );
};

export default Profile;
