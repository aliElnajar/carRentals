import SectionsTemplate from "../generalUI/SectionsTemplate.js";
import TestimonyArrows from "./TestimonyArrows";
import TestimonyCard from "./TestimonyCard";
import { useQuery } from "@tanstack/react-query";
import { fetchingFrmFirebase } from "../data/functions.js";
import { useCtx } from "../../store/generalCtx";
import { reviewTypes } from "../../../types.js";

import Loading from "../generalUI/Loading";

import Error from "../generalUI/Error";

const ReviewsSection = () => {
  const { testimonyDisplayed } = useCtx();

  const {
    data: reviews,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["reviews"],
    queryFn: () => fetchingFrmFirebase("reviews"),
  });

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <Error />;
  }
  return (
    <SectionsTemplate intro="reviews" header="what our customers say about us">
      <div className="flex flex-col space-y-4">
        <div className="flex items-center max-w-2xl mb-2 ">
          {reviews?.map((review: reviewTypes, id) => {
            return (
              <div
                key={id}
                className={`${testimonyDisplayed === id ? "" : "hidden"}`}
              >
                <TestimonyCard {...review} />
              </div>
            );
          })}
        </div>
        <TestimonyArrows />
      </div>
    </SectionsTemplate>
  );
};

export default ReviewsSection;
