import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { useCtx } from "../../store/generalCtx";

const TestimonyArrows = () => {
  const { onTestimonyChange } = useCtx();

  return (
    <div className=" max-w-2xl flex justify-between items-center px-2">
      <button
        className="inline-flex"
        onClick={() => onTestimonyChange("decrement")}
      >
        <FaAngleLeft className="testimony-icons" />
      </button>
      <button
        className="inline-flex"
        onClick={() => onTestimonyChange("increment")}  
      >
        <FaAngleRight className="testimony-icons" />
      </button>
    </div>
  );
};

export default TestimonyArrows;
