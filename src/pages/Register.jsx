import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth, AuthContext } from "../provider/AuthProvider";
import { toast, ToastContainer } from "react-toastify";
import { FcGoogle } from "react-icons/fc";
import { signInWithPopup } from "firebase/auth";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Helmet } from "react-helmet-async";

// Reusable Toast Notification
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

const Register = () => {
  const [show, setShow] = useState(false);
  const { createNewUser, setUser, updateUserProfile, googleProvider } =
    useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const name = form.get("name");
    const email = form.get("email");
    const photo = form.get("photo");
    const password = form.get("password");

    // Password validation regex
    const passregex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    if (!passregex.test(password)) {
      notify(
        "Password must be at least 6 characters long and contain both uppercase and lowercase letters.",
        "error"
      );
      return;
    }

    createNewUser(email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);
        updateUserProfile({ displayName: name, photoURL: photo })
          .then(() => {
            notify("Sign Up successful!");
            navigate("/");
            setUser({ ...user, displayName: name, photoURL: photo });
          })
          .catch((err) => {
            notify(`${err.code}`, "error");
          });
      })
      .catch((error) => {
        notify(`Something went wrong: ${error.code}`, "error");
      });
  };

  const handleGoogleLogin = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        console.log(result);
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
        notify("Google sign-up failed.", "error");
      });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <Helmet>
        <title>Career | Register</title>
      </Helmet>

      <div
        data-aos="zoom-in-left"
        className="card bg-base-100 w-full max-w-lg shadow-xl p-6 border"
      >
        <h1 className="font-semibold text-4xl text-center p-4 bg-blue-200 rounded-lg shadow-lg hover:shadow-indigo-500/50">
          Register Your Account
        </h1>

        <form onSubmit={handleSubmit} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text font-bold">Name</span>
            </label>
            <input
              name="name"
              type="text"
              placeholder="Enter your name"
              className="input input-bordered"
              required
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text font-bold">Photo URL</span>
            </label>
            <input
              name="photo"
              type="text"
              placeholder="Enter your photo URL"
              className="input input-bordered"
              required
            />
          </div>

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

          <div className="form-control mt-6">
            <button className="btn btn-neutral rounded-none font-semibold">
              Register
            </button>
          </div>
        </form>

        <p className="font-semibold text-center">
          Already have an account?{" "}
          <Link className="text-red-500" to="/auth/login">
            Login
          </Link>
        </p>

        <p className="py-2 text-center text-xl font-semibold">or</p>

        <div className="w-full py-4">
          <button
            onClick={handleGoogleLogin}
            className="btn flex items-center justify-center space-x-2 w-full"
            aria-label="Register with Google"
          >
            <FcGoogle className="text-2xl" />
            <span>Register with Google</span>
          </button>
        </div>
      </div>

      <ToastContainer />
    </div>
  );
};

export default Register;
