import { useContext } from "react";
import { Link } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";
import toast, { Toaster } from 'react-hot-toast';

const Register = () => {
 const {createNewUser ,  setUser} = useContext(AuthContext)
  const handleSubmit = ((event)=>
   {
    event.preventDefault();
    // get the form data
    const form =new FormData(event.target);
    const name = form.get("name");
    const photo = form.get("photo");
    const email = form.get ("email");
    const password = form. get ("password");
    console.log({name,photo,email,password});
    createNewUser(email,password)
    .then(result =>{
      const user =result.user;
      setUser (user)
      toast.success(`${user.email} Registered Successfully`);
      event.target.reset();
    })
    .catch ((error)=>{
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode,errorMessage)
    })
   }
  )
  return (
        <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col ">
          <div className="text-center lg:text-left py-5">
            <h1 className="text-5xl font-bold">Register Now!</h1>

          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form className="card-body" onSubmit={handleSubmit}>
            <Toaster position="top-center" toastOptions={{ closeButton: true }} />
            <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input name="name" type="text" placeholder="Enter your name" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input name="photo" type="text" placeholder="Enter Your Phone number" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input name="email" type="email" placeholder="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input name="password" type="password" placeholder="password" className="input input-bordered" required />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Register</button>
              </div>
              <p>Already have an account? Please 
                <Link to= "/auth/login"
                className="ml-3 text-blue-400"
                >Login</Link>
            </p>
            </form>
          </div>
        </div>
      </div>
    );
};

export default Register;