import { Link, NavLink } from "react-router-dom";
const Navbar = () => {
    const links = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/profile">My Profile</NavLink></li>
    </>
  return (
    <div className="w-11/12 mx-auto">
      <div className="navbar">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow *:font-bold"
            >
              {links}
            </ul>
          </div>
          <Link to="/" className="btn btn-ghost text-2xl font-semibold">Career</Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 font-bold">
            {links}
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn btn-neutral rounded-none font-semibold">Login</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
