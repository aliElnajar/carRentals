import NavbarButtons from "./NavbarButtons";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="navbar bg-midGreen/80 px-5 text-white sticky top-0 z-50">
      <div className="navbar-start ">
        <Link to="/" className="btn btn-ghost normal-case text-xl ">
          RentalCars
        </Link>
      </div>
      <div className="navbar-end flex space-x-5">
        <NavbarButtons />
      </div>
    </nav>
  );
};

export default Navbar;
