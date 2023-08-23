import { reducerActionsTypes, InitialStateTypes } from "../../types";

export const initialState: InitialStateTypes = {
  dates: {
    startDate: "",
    endDate: "",
  },
  location: "",
  confirmed: false,
  testimonyDisplayed: 0,
  choosenCar: {},
};

export function reducer(state: InitialStateTypes, action: reducerActionsTypes) {
  let newState = { ...state };
  switch (action.type) {
    case "SET_LOCATION":
      newState = { ...state, location: action.payload };
      break;
    case "SET_DATES":
      newState = { ...state, dates: action.payload };
      break;
    case "NEXT_TESTIMONY":
      newState = {
        ...state,
        testimonyDisplayed:
          state.testimonyDisplayed === 3 ? 0 : state.testimonyDisplayed + 1,
      };
      break;
    case "PREVIOUS_TESTIMONY":
      newState = {
        ...state,
        testimonyDisplayed:
          state.testimonyDisplayed === 0 ? 3 : state.testimonyDisplayed - 1,
      };
      break;
    case "ASSERT_CONFIRMATION":
      newState = { ...state, confirmed: true };
      break;
    case "CANCEL_CONFIRMATION":
      newState = { ...state, confirmed: false };
      break;
    case "CHOOSED_CAR":
      newState = { ...state, choosenCar: action.payload };
      break;
    case "RESET":
      newState = { ...initialState };
      break;
    default:
      return newState;
  }
  return newState;
}
