import Datepicker from "react-tailwindcss-datepicker";
import { useCtx } from "../../store/generalCtx";
import React from "react";
type Props = {
  containerOpacity: boolean;
};
const HeroInputs = ({ containerOpacity }: Props) => {
  const {
    dates: datesValue,
    location: locationValue,
    onLocationChange,
    onDateChange,
    onConfirmatonChange,
    confirmed,
  } = useCtx();
  const opacity = containerOpacity
    ? "bg-blueBlack/30  px-7 py-3 text-white"
    : "bg-blueBlack px-7 py-3 text-white";

  return (
    <>
      {!confirmed ? (
        <div
          className={` ${opacity}  rounded-md flex  jusify-center items-center space-x-2  `}
        >
          <div className="flex flex-col items-start justify-center space-y-1">
            <label htmlFor="location">location</label>
            <input
              type="text"
              className=" rounded-md p-2 w-[100%] text-black"
              value={locationValue}
              onChange={(e) => onLocationChange(e)}
            />
          </div>

          <div className="flex flex-col items-start justify-center space-y-1">
            <label htmlFor="starting-date">dates</label>
            <Datepicker
              startFrom={new Date()}
              primaryColor={"green"}
              value={datesValue}
              onChange={onDateChange}
            />
          </div>
          <a
            className="px-4 py-3 rounded-lg bg-lightGreen hover:midGreen/80 mt-auto"
            onClick={() => onConfirmatonChange("confirm")}
            href="#cars"
          >
            confirm
          </a>
        </div>
      ) : (
        <button
          onClick={() => onConfirmatonChange("cancel")}
          className={` ${opacity}
           btn hover:bg-blueBlack/80  `}
        >
          change dates\location
        </button>
      )}
    </>
  );
};

export default React.memo(HeroInputs);
