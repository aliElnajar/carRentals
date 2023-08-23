import { NavLink, Link } from "react-router-dom";
import hamburgerMenuSvg from "../../assets/Hamburger.svg";
const NavbarButtons = () => {
  return (
    <div>
      <div className="hidden md:inline-block">
        <NavLink
          to="/ "
          className={({ isActive }) =>
            isActive ? "nav-buton  border-b-2 border-white" : "nav-button "
          }
        >
          home
        </NavLink>
        <a href="#cars" className="nav-button">
          cars
        </a>
        <a href="#faq" className="nav-button text-sm">
          FAQ
        </a>
        <a href="#reviews" className="nav-button">
          reviews
        </a>
        <NavLink
          to="/join"
          className={({ isActive }) =>
            isActive ? "nav-buton  border-b-2 border-white" : "nav-button"
          }
        >
          join us
        </NavLink>
      </div>
      <div className="dropdown dropdown-end md:hidden">
        <label tabIndex={0} className="btn btn-ghost btn-circle">
          <img
            src={hamburgerMenuSvg}
            alt="hamburger menu"
            className="h-8 w-8"
          />
        </label>

        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow text-midGreen bg-gray-50 rounded-box w-52 checked:bg-gray-50 "
        >
          <li>
            <Link to="/" className="nav-button">
              Home
            </Link>
          </li>
          <li>
            <a href="#cars" className="nav-button">
              cars
            </a>
          </li>
          <li>
            <a href="#faq" className="nav-button">
              FAQ
            </a>
          </li>
          <li>
            <a href="#reviews" className="nav-button">
              reviews
            </a>
          </li>
          <li>
            <Link to="/join" className="nav-button">
              join us
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavbarButtons;
