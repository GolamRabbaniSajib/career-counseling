import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { auth, AuthContext } from "../provider/AuthProvider";
import { toast, ToastContainer } from "react-toastify";
import { FcGoogle } from "react-icons/fc";
import { signInWithPopup } from "firebase/auth";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Helmet } from "react-helmet-async";

// Toast Notification Function
const notify = (message, type = "success") => {
  const options = {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
  };
  type === "success"
    ? toast.success(message, options)
    : toast.warn(message, options);
};

const LogIn = () => {
  const [show, setShow] = useState(false);
  const { logIn, setUser, googleProvider } = useContext(AuthContext);
  const [error, setError] = useState({});
  const location = useLocation();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const email = form.get("email");
    const password = form.get("password");

    logIn(email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);
        notify("Successfully logged in");
        navigate(location?.state || "/");
      })
      .catch((errors) => {
        setError({ ...error, login: errors.message });
        notify(errors.message, "error");
      });
  };

  const handleGoogleLogin = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        navigate(location?.state || "/");
      })
      .catch((error) => {
        console.error(error);
        notify("Google login failed", "error");
      });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <Helmet>
        <title>Career | Login</title>
      </Helmet>

      <div
        data-aos="zoom-in-down"
        className="card bg-base-100 w-full max-w-lg shadow-xl p-6 border"
      >
        <h1 className="font-semibold text-4xl text-center p-4 bg-blue-200 rounded-lg shadow-lg hover:shadow-indigo-500/50">
          Login to Your Account
        </h1>

        <form onSubmit={handleSubmit} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text font-bold">Email</span>
            </label>
            <input
              name="email"
              type="email"
              placeholder="Enter your email"
              className="input input-bordered"
              required
            />
          </div>

          <div className="form-control relative">
            <label className="label">
              <span className="label-text font-bold">Password</span>
            </label>
            <input
              name="password"
              type={show ? "text" : "password"}
              placeholder="Enter your password"
              className="input input-bordered"
              required
            />
            <button
              type="button"
              onClick={() => setShow(!show)}
              className="absolute right-3 top-11 text-xl"
              aria-label="Toggle password visibility"
            >
              {show ? <FaEye /> : <FaEyeSlash />}
            </button>
          </div>

          {error?.login && (
            <label className="label py-2 px-3 bg-red-400 text-black text-sm">
              {error.login}
            </label>
          )}

          <label className="label">
            <Link to="/auth/forgot" className="label-text-alt link link-hover">
              Forgot your password?
            </Link>
          </label>

          <div className="form-control mt-4">
            <button className="btn btn-neutral font-semibold rounded-none hover:shadow-indigo-500/50">
              Log In
            </button>
          </div>
        </form>

        <p className="font-semibold text-center">
          Don't have an account?{" "}
          <Link className="text-red-500" to="/auth/register">
            Register
          </Link>
        </p>

        <p className="py-2 text-center text-xl font-semibold">or</p>

        <div className="w-full py-4">
          <button
            onClick={handleGoogleLogin}
            className="btn flex items-center justify-center space-x-2 w-full"
            aria-label="Login with Google"
          >
            <FcGoogle className="text-2xl" />
            <span>Login with Google</span>
          </button>
        </div>
      </div>

      <ToastContainer />
    </div>
  );
};

export default LogIn;
