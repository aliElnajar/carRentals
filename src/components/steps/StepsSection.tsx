import { stepsarray } from "../data/stepsData";
import SectionsTemplate from "../generalUI/SectionsTemplate";
import StepCard from "./StepCard";
const StepsToRent = () => {
  return (
    <SectionsTemplate intro="how it works?" header="Rent with 3 easy steps">
      <div className="flex flex-col md:flex-row items-center max-w-6xl space-x-10">
        {stepsarray.map((step) => {
          return (
            <div key={step.id} className="flex-1 items-center">
              <StepCard {...step} />
            </div>
          );
        })}
      </div>
    </SectionsTemplate>
  );
};

export default StepsToRent;
