import { NavLink } from "react-router";
import profileImage from "../assets/profile-image.jpg";

const UserDropdown = ({ user, handleSignOut }) => (
  <div className="dropdown dropdown-end">
    <label tabIndex={0} className="cursor-pointer">
      <img
        src={user?.photoURL || profileImage}
        alt="avatar"
        className="w-10 h-10 rounded-full border object-cover"
      />
    </label>

    <ul
      tabIndex={0}
      className="dropdown-content menu bg-base-100 rounded-box shadow-lg mt-3 w-48 p-2"
    >
      <li>
        <NavLink to="/dashboard/profile">Profile</NavLink>
      </li>
      <li>
        <button onClick={handleSignOut} className="text-error font-semibold">
          Logout
        </button>
      </li>
    </ul>
  </div>
);
export default UserDropdown;
