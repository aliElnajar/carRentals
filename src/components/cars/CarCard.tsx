import { carObjectTypes } from "../../../types";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import { useCtx } from "../../store/generalCtx";
type Props = { car: carObjectTypes };
const CarCard = ({ car }: Props) => {
  const { name, img, model, rentRate, productionYear, id } = car;
  const { onChoosingCar } = useCtx();
  return (
    <Link
      onClick={() => onChoosingCar(car)}
      to={`reservation?carId=${id}`}
      className="card group  card-compact w-[300px] h-[400px] bg-base-200 shadow-xl "
    >
      <figure>
        <img src={img} alt="Shoes" className="object-cover w-full h-[300px] " />
      </figure>
      <div className="card-body ">
        <h2 className="card-title text-[#39395f]">
          {model} {productionYear}
        </h2>
        <h6 className="font-light text-lg -mt-2">{name}</h6>

        <div className="card-actions justify-end items-center">
          <p className="italic tracking-wide font-semibold text-lg ">
            {rentRate}$<span className="font-light">/day</span>
          </p>
          <button className="btn  bg-gray-800 hover:bg-black text-white group-hover:scale-105 transition-all duration-500 ease-in-out">
            <FaArrowRight className="text-lg" />
          </button>
        </div>
      </div>
    </Link>
  );
};

export default CarCard;
