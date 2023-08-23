export type sectionTempPropsTypes = {
  intro?: string;
  header: string;
  children: React.ReactNode;
};

export type stepsDateTypes = {
  image: string;
  step: string;
  description: string;
  id: number;
};

export type stepsDataArrayTypes = stepsDateTypes[];

export type datesStateTypes = {
  startDate: string;
  endDate: string;
};

export type carObjectTypes = {
  name: string;
  img: string;
  color: string;
  model: string;
  rentRate: string;
  productionYear: string;
  id: string;
};

export type InitialStateTypes = {
  location: string;
  dates: dataStateTypes;
  confirmed: boolean;
  testimonyDisplayed: number;
  choosenCar: {} | carObjectTypes;
};

type reducerActionsWithPayload = {
  type: "SET_LOCATION" | "SET_DATES" | "CHOOSED_CAR";
  payload: any;
};

type reducerActionsWithoutPayload = {
  type:
    | "ASSERT_CONFIRMATION"
    | "CANCEL_CONFIRMATION"
    | "NEXT_TESTIMONY"
    | "PREVIOUS_TESTIMONY"
    | "RESET";
};

export type reducerActionsTypes =
  | reducerActionsWithPayload
  | reducerActionsWithoutPayload;

type reviewTypes = {
  id: number;
  img: string;
  name: string;
  rating: number;
  review: string;
};

type faqTypes = {
  id: number;
  question: string;
  answer: string;
};

export type formTypes = {
  name: string;
  number: number;
  email: string;
  car?: string;
  location?: string;
  dates?: datesStateTypes;
  reservedCarId?: string;
};
