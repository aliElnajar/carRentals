import TestimonyRating from "./TestimonyRating";
type Props = {
  img: string;
  name: string;
  review: string;
  rating: number;
};

const TestimonyCard = ({ img, name, review, rating }: Props) => {
  return (
    <div className="flex flex-col items-center  space-y-5 px-2 ">
      <img
        className="avatar w-28 h-28 rounded-full object-cover"
        src={img}
        alt="avatar-img"
      />
      <h3 className="text-3xl">{name}</h3>
      <TestimonyRating rating={rating} />
      <p className="italic text-center text-sm md:text-lg tracking-wider md:tracking-normal ">
        {review}
      </p>
    </div>
  );
};

export default TestimonyCard;
