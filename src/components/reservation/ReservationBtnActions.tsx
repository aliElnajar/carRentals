import { Link } from "react-router-dom";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
const ReservationBtnActions = () => {
  return (
    <div className="flex items-center justify-between ">
      <Link
        to="/"
        className="flex items-center btn bg-[#f7ab3a]/80   hover:bg-[#f7ab0a]   p-3"
      >
        <FaArrowLeft />
        <p className="ml-2">back home</p>
      </Link>
      <Link
        to="/confirmreservation"
        className="btn bg-midGreen/80 hover:bg-midGreen"
      >
        <span className="mr-2">Proceed</span>
        <FaArrowRight />
      </Link>
    </div>
  );
};

export default ReservationBtnActions;
