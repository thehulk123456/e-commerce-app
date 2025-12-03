import StarIconGrey from "@/_icons/StarIconGrey";
import StarIconYellow from "@/_icons/StarIconYellow";
import { useState } from "react";

interface StarRatingProps {
  rating?: number;
  numberOfReviews?: number;
  showNumberOfReviews: boolean;
}

export default function StarRating({
  rating,
  numberOfReviews,
  showNumberOfReviews,
}: StarRatingProps) {
  const stars = Array(5).fill(0);

  const [hoveredStars, setHoveredStars] = useState(() =>
    rating ? Math.ceil(rating) : 0
  );

  const [clickedStars, setClickedStars] = useState(0);

  return (
    <div className="flex items-center gap-2">
      <div className="flex items-center gap-1">
        {stars.map((_, index) => (
          <div
            key={index}
            className={`w-[15px] h-[15px] ${rating ? "" : "cursor-pointer"}`}
            onClick={() => {
              if (!rating) {
                setClickedStars(index + 1);
              }
            }}
            onMouseEnter={() => {
              if (!rating) {
                setHoveredStars(index + 1);
              }
            }}
            onMouseLeave={() => {
              if (!rating) {
                setHoveredStars(0);
              }
            }}>
            {index + 1 <= hoveredStars || index + 1 <= clickedStars ? (
              <StarIconYellow />
            ) : (
              <StarIconGrey />
            )}
          </div>
        ))}
      </div>
      {showNumberOfReviews ? (
        <div className="text-black text-sm opacity-50 font-semibold">
          ({numberOfReviews ? numberOfReviews : 0})
        </div>
      ) : null}
    </div>
  );
}
