import { sectionTempPropsTypes } from "../../../types";
const SectionsTemplate = ({
  intro = "",
  header,
  children,
}: sectionTempPropsTypes) => {
  return (
    <section className=" bg-white py-32 md:py-36 px-2  flex flex-col items-center">
      <h6 className="tracking-wide text-[t] font-semibold text-lg">{intro}</h6>
      <h2 className="tracking-wide text-black font-semibold text-3xl  lg:text-4xl my-4 text-center mb-10 md:mb-20 mt-5">
        {header}
      </h2>
      {children}
    </section>
  );
};

export default SectionsTemplate;
