import CarCard from "./CarCard";
import SectionsTemplate from "../generalUI/SectionsTemplate";
import { carObjectTypes } from "../../../types";
import { useQuery } from "@tanstack/react-query";
import { fetchingFrmFirebase } from "../data/functions";
import Loading from "../generalUI/Loading";

import Error from "../generalUI/Error";

const Cars = () => {
  const {
    data: cars,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["carss"],
    queryFn: () => fetchingFrmFirebase("cars"),
  });

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <Error />;
  }
  return (
    <SectionsTemplate
      intro="our available cars"
      header=" Explore out best deals
    from top rated dealers"
    >
      <div className="grid grid-cols-1 gap-5  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">
        {cars
          ? cars.map((car: carObjectTypes) => {
              return <CarCard key={car.id} car={car} />;
            })
          : null}
      </div>
    </SectionsTemplate>
  );
};

export default Cars;
