import ArrowLeftIcon from "@/_icons/ArrowLeftIcon";
import ArrowRightIcon from "@/_icons/ArrowRightIcon";

export default function PaginationArrows() {
  return (
    <div className="flex items-center gap-2">
      <div>
        <ArrowLeftIcon />
      </div>
      <div>
        <ArrowRightIcon />
      </div>
    </div>
  );
}
