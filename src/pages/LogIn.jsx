import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { auth, AuthContext } from "../provider/AuthProvider";
import { toast, ToastContainer } from "react-toastify";
import { FcGoogle } from "react-icons/fc";
import { signInWithPopup } from "firebase/auth";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const LogIn = () => {
  const [show, setShow] = useState(false);
  const { logIn, setUser, googleProvider } = useContext(AuthContext);
  const [error, setError] = useState({});
  const location = useLocation();
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    // get form data
    const form = new FormData(e.target);
    const email = form.get("email");
    const password = form.get("password");
    console.log(email, password);
    logIn(email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);
        toast.success("Successfully Login", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
        navigate(location?.state ? location.state : "/");
      })
      .catch((errors) => {
        setError({ ...error, login: errors.code });
        toast.warn(`${errors.code}`, {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      });
  };
  const handleGoogleLogin = () => {
    signInWithPopup(auth, googleProvider)
    .then(result => {
        console.log(result)
        navigate(location?.state ? location.state : "/");
    })
    .catch(error =>{
        console.log(error)
    })
}
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div
        data-aos="zoom-in-down"
        className="card bg-base-100 w-full max-w-lg shrink-0 shadow-xl p-6 border"
      >
        <h1 className="font-semibold text-4xl text-center p-4 bg-blue-200 rounded-lg shadow-lg hover:shadow-indigo-500/50">
          Login your account
        </h1>
        <form onSubmit={handleSubmit} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text font-bold">Email</span>
            </label>
            <input
              name="email"
              type="email"
              placeholder="email"
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
              type={show? 'text' : 'password'}
              placeholder="password"
              className="input input-bordered"
              required
            />
            <button onClick={() => setShow(!show)} className="btn btn-sm absolute right-2 top-11">{show? <FaEye /> : <FaEyeSlash />}</button>
          </div>
          {error?.login && (
              <label className="label py-2 px-3 bg-red-400 text-black text-sm">
                {error.login}
              </label>
            )}
            <label className="label">
              <Link to="/auth/forgot" className="label-text-alt link link-hover">
                Forgot password?
              </Link>
            </label>
          <div className="form-control mt-3">
            <button className="btn btn-neutral  hover:shadow-indigo-500/50 font-semibold  rounded-none">
              Login
            </button>
          </div>
        </form>
        <p className="font-semibold text-center">
          Don’t Have An Account ?{" "}
          <Link className="text-red-500" to="/auth/register">
            Register
          </Link>
        </p>
        <p className="py-2 text-center text-xl font-semibold">or</p>
        <div className="*:w-full py-4">
          <button onClick={handleGoogleLogin} className="btn">
            <FcGoogle /> Login With Google
          </button>
        </div>
      </div>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </div>
  );
};

export default LogIn;
