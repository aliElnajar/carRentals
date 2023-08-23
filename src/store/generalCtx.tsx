import { createContext, useContext, useEffect, useReducer } from "react";
import { reducer, initialState } from "./reducer.ts";
const GeneralCtx = createContext<any>({});

export const ContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const initializerFn = () => {
    const initialObject = initialState;

    const carCache = localStorage.getItem("choosenCar");
    const datesCache = localStorage.getItem("datesValue");
    const locationCache = localStorage.getItem("location");

    if (carCache) {
      initialObject.choosenCar = JSON.parse(carCache);
    }
    if (datesCache) {
      initialObject.dates = JSON.parse(datesCache);
    }
    if (locationCache) {
      initialObject.location = JSON.parse(locationCache);
    }
    return initialObject;
  };
  const [state, dispatch] = useReducer(reducer, initialState, initializerFn);

  useEffect(() => {
    localStorage.setItem("choosenCar", JSON.stringify(state.choosenCar));
    localStorage.setItem("datesValue", JSON.stringify(state.dates));
    localStorage.setItem("location", JSON.stringify(state.location));
  }, [state.choosenCar, state.dates, state.location]);

  const onLocationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: "SET_LOCATION", payload: e.target.value });
  };

  const onDateChange = (newValue: any) => {
    dispatch({ type: "SET_DATES", payload: newValue });
  };

  const onTestimonyChange = (e: "increment" | "decrement") => {
    if (e === "increment") {
      dispatch({ type: "NEXT_TESTIMONY" });
    } else {
      dispatch({ type: "PREVIOUS_TESTIMONY" });
    }
  };

  const onConfirmatonChange = (e: "confirm" | "cancel") => {
    console.log("condition");
    console.log(state.location);
    if (!state.dates || !state.location) return;
    e === "confirm"
      ? dispatch({ type: "ASSERT_CONFIRMATION" })
      : dispatch({ type: "CANCEL_CONFIRMATION" });
  };

  const onChoosingCar = (e: any) => {
    dispatch({ type: "CHOOSED_CAR", payload: e });
  };

  const resetHandler = () => {
    dispatch({ type: "RESET" });
  };

  return (
    <GeneralCtx.Provider
      value={{
        ...state,
        onLocationChange,
        onDateChange,
        onTestimonyChange,
        onChoosingCar,
        onConfirmatonChange,
        resetHandler,
      }}
    >
      {children}
    </GeneralCtx.Provider>
  );
};

export const useCtx = () => {
  return useContext(GeneralCtx);
};
