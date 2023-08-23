import FAQCard from "./FAQCard";
import SectionsTemplate from "../generalUI/SectionsTemplate";
import { useQuery } from "@tanstack/react-query";
import { fetchingFrmFirebase } from "../data/functions";
import { faqTypes } from "../../../types";
import Loading from "../generalUI/Loading";
import Error from "../generalUI/Error";
const FAQSection = () => {
  const {
    data: faq,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["faq"],
    queryFn: () => fetchingFrmFirebase("faq"),
  });

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <Error />;
  }

  return (
    <SectionsTemplate intro="FAQ" header="what are you wondering about?">
      <div className="w-5xl flex flex-col space-y-4  items-center ">
        {faq?.length
          ? faq?.map((faq: faqTypes, i) => (
              <FAQCard key={faq.id} {...faq} delay={i + 2} />
            ))
          : null}
      </div>
    </SectionsTemplate>
  );
};

export default FAQSection;
