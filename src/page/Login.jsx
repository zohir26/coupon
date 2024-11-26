import { useContext } from "react";
import { Link } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";
import toast, {Toaster} from "react-hot-toast";

const Login = () => {
  const {userLogin, setUser} =useContext(AuthContext)
  const  handleLogin = (( event)=>{
    event.preventDefault();
    const form = new FormData (event.target);
    const email = form.get("email");
    const password= form.get("password")
    console.log({email,password})
    userLogin(email,password)
    .then(result=>{
      const user= result.user;
      setUser(user)
      toast.success("Successfully Logged In")
      event.target.reset();
    })
    .catch(error =>{
      toast.warning(error, "Please Provide Right Credential")
    })
  })
  
  return (
        <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col ">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold py-5">Login now!</h1>

          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form className="card-body" onSubmit={handleLogin}>
            <Toaster position="top-center" toastOptions={{ closeButton: true }} />
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
                <button className="btn btn-primary">Login</button>
              </div>
              <p>Don't have an account? Please 
                <Link to= "/auth/register"
                className="ml-3 text-blue-400"
                >Register</Link>
            </p>
            </form>
            
          </div>
        </div>
      </div>
    );
};

export default Login;