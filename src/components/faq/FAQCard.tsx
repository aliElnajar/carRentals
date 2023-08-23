import { motion } from "framer-motion";
type Props = {
  question: string;
  answer: string;
  delay: number;
};

const FAQCard = ({ question, answer, delay }: Props) => {
  return (
    <motion.div
      initial={{ y: "-100px", opacity: 0 }}
      whileInView={{ y: "0", opacity: 1 }}
      viewport={{ once: true }}
      transition={{
        delay: delay * 0.2,
        duration: 0.3,
        bounce: 0.3,
        type: "spring",
      }}
      className="collapse collapse-arrow w-[100%]  lg:w-[800px]"
    >
      <input type="checkbox" className="peer" />
      <div className="collapse-title  text-black text-lg bg-[#f5eec2]/80  peer-checked:text-secondary-white peer-checked:border-b border-white">
        {question}
      </div>
      <div className="collapse-content  text-[#fceec2] peer-checked:bg-slate-800 peer-checked:text-secondary-[#fceec2]">
        <p className="tracking-wide first-letter:uppercase pt-8 pb-4 px-2">
          {answer}
        </p>
      </div>
    </motion.div>
  );
};

export default FAQCard;
