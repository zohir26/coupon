import { useContext, useRef, useState } from "react";
// import { Link, useNavigate } from "react-router-dom"; // Fixed import
import { Link } from "react-router";
import { useNavigate } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";
import toast, { Toaster } from "react-hot-toast";
import { sendPasswordResetEmail, getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { FaGoogle } from "react-icons/fa";
const Login = () => {
  const auth = getAuth();
  const { userLogin, setUser } = useContext(AuthContext);
  const [error, setError] = useState({});
  const navigate = useNavigate();
  const emailRef = useRef();
// handle google login
const provider = new GoogleAuthProvider();

const handleGoogleSignIn = () =>{
  signInWithPopup(auth, provider)
  .then ((result)=>{
    console.log(result)
  })
  .catch((error)=>{
    console.log(error)
  })
}
  // Handle Login
  const handleLogin = (event) => {
    event.preventDefault();
    const form = new FormData(event.target);
    const email = form.get("email");
    const password = form.get("password");

    userLogin(email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);
        toast.success("Successfully Logged In");
        navigate("/");
        event.target.reset();
      })
      .catch((err) => {
        setError({ ...error, login: err.code });
      });
  };

  // Handle Forget Password
  const handleForgetPassword = () => {
    const forgetEmail = emailRef.current.value; // Use emailRef to get the email
    if (!forgetEmail) {
      toast.error("Please provide a valid email address");
      return;
    }

    sendPasswordResetEmail(auth, forgetEmail)
      .then(() => {
        toast.success("Reset email sent, please check your email");
      })
      .catch((err) => {
        toast.error("Failed to send reset email: " + err.message);
      });
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col">
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
              <input
                name="email"
                ref={emailRef}
                type="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                name="password"
                type="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              {/* Show Error Message */}
              {error.login && (
                <h2 className="py-2 text-sm text-red-500">{error.login}</h2>
              )}
              <label className="label">
                <a
                  href="#"
                  onClick={handleForgetPassword}
                  className="label-text-alt link link-hover"
                >
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
            <h2 className="text-center">Or</h2>
            <div className="form-control mt-6">
              <button onClick={handleGoogleSignIn}
               className="btn btn-primary">
                 <FaGoogle /> Login with Google
                 </button>
            </div>
            <p>
              Don't have an account? Please
              <Link to="/auth/register" className="ml-3 text-blue-400">
                Register
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
