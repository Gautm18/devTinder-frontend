import axios from "axios";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { BASE_URL } from "../constants";
import { removeUser } from "../utils/userSlice";

const NavBar = () => {
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await axios.post(BASE_URL + "/logout", {}, { withCredentials: true });
      dispatch(removeUser());
      return navigate("/login");
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <div className="navbar bg-base-300 shadow-sm fixed top-0 left-0 right-0 z-50 px-4">
      {/* Left: DevTinder */}
      <div className="flex-none">
        <Link to="/feed" className="btn btn-ghost text-xl">
          DevTinder
        </Link>
      </div>

      {/* Center: Cupid Animation */}
      <div className="flex-1 flex items-center justify-center relative">
        <div className="flex items-center justify-center w-[180px] h-[60px] relative">
          {/* Boy */}
          <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white text-lg z-10">
            👦
          </div>

          {/* Arrow */}
          <div className="absolute left-10 top-1/2 transform -translate-y-1/2 text-lg animate-arrowFly z-0">
            🏹
          </div>

          {/* Girl + Heart */}
          <div className="ml-auto w-10 h-10 bg-pink-500 rounded-full flex items-center justify-center text-white text-lg relative z-10">
            👧
            <span className="absolute -top-2 -right-2 text-red-500 animate-heartHit">❤️</span>
          </div>
        </div>
      </div>

      {/* Right: Search + Avatar */}
      {user && (
        <div className="flex-none flex items-center gap-2">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered w-24 md:w-auto"
          />
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <Link to="/profile" className="justify-between">
                  Profile
                </Link>
              </li>
              <li>
                <Link to="/profile/edit">Edit Profile</Link>
              </li>
              <li>
                <a onClick={handleLogout}>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default NavBar;
