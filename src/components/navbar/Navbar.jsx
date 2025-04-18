import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import { FaHome, FaHouseUser } from "react-icons/fa";
import { MdReviews } from "react-icons/md";
import { TbLogin2 } from "react-icons/tb";
import { HiOutlineLogin } from "react-icons/hi";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const links = (
    <>
      <li>
        <NavLink
          to="/"
          className="flex items-center gap-2 px-3 py-2 hover:text-orange-500 transition"
        >
          <FaHome /> Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/profile"
          className="flex items-center gap-2 px-3 py-2 hover:text-orange-500 transition"
        >
          <FaHouseUser /> My Profile
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/review"
          className="flex items-center gap-2 px-3 py-2 hover:text-orange-500 transition"
        >
          <MdReviews /> Reviews
        </NavLink>
      </li>
    </>
  );

  return (
    <nav className="w-full bg-white dark:bg-gray-900 shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo & Mobile Dropdown */}
        <div className="flex items-center gap-4">
          {/* Mobile Menu */}
          <div className="lg:hidden">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost p-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-gray-800 dark:text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[999] p-4 shadow bg-base-100 dark:bg-gray-800 rounded-box w-56 font-medium space-y-2"
              >
                {links}
              </ul>
            </div>
          </div>

          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img
              src="https://i.ibb.co.com/JqRHKcV/09-57-46-893-512.webp"
              alt="Career"
              className="w-10 h-10 rounded-full"
            />
            <span className="text-xl font-bold text-gray-800 dark:text-white">
              CareerPath
            </span>
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex">
          <ul className="flex items-center gap-6 font-medium text-gray-700 dark:text-gray-200">
            {links}
          </ul>
        </div>

        {/* Auth & Avatar */}
        <div className="flex items-center gap-4">
          {user && user.email && (
            <div className="dropdown dropdown-hover">
              <div tabIndex={0} role="button">
                <img
                  className="w-10 h-10 rounded-full object-cover border-2 border-orange-400"
                  src={user?.photoURL}
                  alt={user.displayName}
                />
              </div>
              <div
                tabIndex={0}
                className="dropdown-content z-[999] p-3 rounded-box bg-white dark:bg-gray-800 shadow"
              >
                <p className="text-sm font-semibold text-gray-800 dark:text-white">
                  {user.displayName}
                </p>
              </div>
            </div>
          )}

          {user && user.email ? (
            <button
              onClick={logOut}
              className="btn btn-sm bg-orange-500 hover:bg-orange-600 text-white flex items-center gap-2 rounded-md"
            >
              <HiOutlineLogin className="text-lg" /> Logout
            </button>
          ) : (
            <Link
              to="/auth/login"
              className="btn btn-sm bg-orange-500 hover:bg-orange-600 text-white flex items-center gap-2 rounded-md"
            >
              <TbLogin2 className="text-lg" /> Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
