type Props = {
  rating: number;
};
const TestimonyRating = ({ rating }: Props) => {
  const numberOfStars = Array(5).fill("");
  return (
    <div className="rating rating-sm">
      {numberOfStars.map((_star, i) => (
        <input
          key={i}
          readOnly
          type="radio"
          className="mask mask-star-2 bg-orange-400"
          checked={i === rating - 1}
        />
      ))}
    </div>
  );
};

export default TestimonyRating;
