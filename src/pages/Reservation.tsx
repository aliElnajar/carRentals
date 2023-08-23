import HeroInputs from "../components/generalUI/HeroInputs";
import SectionsTemplate from "../components/generalUI/SectionsTemplate";
import { useCtx } from "../store/generalCtx";
import ReservedCarTable from "../components/reservation/ReservedCarTable";
import ReservationBtnActions from "../components/reservation/ReservationBtnActions";
const Reservation = () => {
  const { choosenCar: car, confirmed } = useCtx();
  return (
    <div>
      <SectionsTemplate header="please confirm your reservation details">
        <div className="w-[100%] md:w[70%] lg:w-[90%] flex flex-col lg:flex-row space-y-4 lg:space-y-0 p-1   mb-4 items-center justify-around">
          <img
            src={car.img}
            alt="car image"
            className="object-cover w-[70vw]  lg:w-[30%]  rounded-lg"
          />
          <div className="flex flex-col space-y-4 w-[100%] md:w-[60%]">
            <ReservedCarTable {...car} />
            <HeroInputs containerOpacity={false} />
            {confirmed ? <ReservationBtnActions /> : null}
          </div>
        </div>
      </SectionsTemplate>
    </div>
  );
};

export default Reservation;
