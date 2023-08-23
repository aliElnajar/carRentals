import { stepsDateTypes } from "../../../types.ts";
import { motion } from "framer-motion";
const StepCard = ({ image, step, description, id }: stepsDateTypes) => {
  return (
    <motion.div
      initial={{ x: "-100px", opacity: 0 }}
      whileInView={{ x: "0", opacity: 1 }}
      viewport={{ once: true }}
      transition={{
        delay: id * 0.3,
        duration: 0.3,
        bounce: 0.3,
        type: "spring",
      }}
      className="flex flex-col text-center  space-y-3 p-4"
    >
      <img src={image} alt="location-img" className="w-48 h-48 mx-auto" />
      <h2 className="text-lg font-semibold text-midGreen">{step}</h2>
      <p className=" text-left text-sm tracking-wider italic">{description}</p>
    </motion.div>
  );
};

export default StepCard;
