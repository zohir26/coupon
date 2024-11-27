import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";
import toast, { Toaster } from 'react-hot-toast';
import { IoIosEyeOff } from "react-icons/io";
import { FaEye } from "react-icons/fa6";
const Register = () => {
  const { createNewUser, setUser, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();
  const [error, setError] = useState({});
  const[showPassword, setShowPassword] =useState(false)
  const validatePassword = (password) => {
    const regex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return regex.test(password);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // get the form data
    const form = new FormData(event.target);
    const name = form.get("name");
    if (name.length < 5) {
      setError({ ...error, name: "Name must be more than 5 characters long" });
      return;
    }
    const photo = form.get("photo");
    const email = form.get("email");
    const password = form.get("password");

    // Password validation
    if (!validatePassword(password)) {
      setError({
        ...error,
        password:
          "Password must be at least 8 characters long, include an uppercase letter, a lowercase letter, a number, and a special character.",
      });
      return;
    }

    createNewUser(email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);

        updateUserProfile({ displayName: name, photoURL: photo })
          .then(() => {
            navigate('/');
          })
          .catch((err) => {
            console.error(err);
          });

        toast.success(`${user.email} Registered Successfully`);
        event.target.reset();
      })
      .catch((err) => {
        setError({ ...error, firebase: err.message });
      });
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col">
        <div className="text-center lg:text-left py-5">
          <h1 className="text-5xl font-bold">Register Now!</h1>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form className="card-body" onSubmit={handleSubmit}>
            <Toaster position="top-center" toastOptions={{ closeButton: true }} />
            {/* Name Input */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                name="name"
                type="text"
                placeholder="Enter your name"
                className="input input-bordered"
                required
              />
              {error.name && <h2 className="py-2 text-sm text-red-500">{error.name}</h2>}
            </div>
            {/* Photo URL Input */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                name="photo"
                type="text"
                placeholder="Enter Your Photo URL"
                className="input input-bordered"
                required
              />
            </div>
            {/* Email Input */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                name="email"
                type="email"
                placeholder="Enter your email"
                className="input input-bordered"
                required
              />
            </div>
            {/* Password Input */}
            <div className="form-control relative">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                name="password"
                type={showPassword ? "text" : "password" }
                placeholder="Enter your password"
                className="input input-bordered"
                required
              />
              <button
              onClick={()=>{
                setShowPassword(!showPassword)
              }}
              className="  bg-none border-none absolute right-2 top-12">
                {
                  showPassword ? <IoIosEyeOff /> : <FaEye />
                }
                </button>

              <p className="text-sm text-gray-500 mt-2">
                Password must be at least 8 characters long, include an uppercase letter, a lowercase letter, a number, and a special character.
              </p>
              {error.password && (
                <h2 className="py-2 text-sm text-red-500">{error.password}</h2>
              )}
            </div>
            {/* Firebase Error */}
            {error.firebase && (
              <p className="py-2 text-sm text-red-500">{error.firebase}</p>
            )}
            {/* Register Button */}
            <div className="form-control mt-6">
              <button className="btn btn-primary">Register</button>
            </div>
            <p>
              Already have an account? Please{" "}
              <Link to="/auth/login" className="ml-3 text-blue-400">
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
