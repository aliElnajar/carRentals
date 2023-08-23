import dateSVG from "../../assets/dateSVG.svg";
import locationSVG from "../../assets/locationSVG.svg";
import successSVG from "../../assets/successSVG.svg";
import { stepsDataArrayTypes } from "../../../types";
export const stepsarray: stepsDataArrayTypes = [
  {
    image: locationSVG,
    step: "choose a location",
    description: "the place where you will pickup and dropoff the car",
    id: 2,
  },
  {
    image: dateSVG,
    step: "reserve dates",
    description:
      " choose two dates which are pick-up ,and drop-off date , these dates starting time will be 07:00 am",
    id: 3,
  },
  {
    image: successSVG,
    step: "book a car",
    description:
      "choosing from variety of cars available, available cars on choosen date only will appear to you",
    id: 4,
  },
];
