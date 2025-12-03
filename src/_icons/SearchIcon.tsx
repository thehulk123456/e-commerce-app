import { SVGProps } from "react";

const SearchIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={18}
    height={18}
    fill="none"
    {...props}>
    <path
      stroke="#000"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="m16.75 16.75-3.778-3.784m2.094-5.058a7.158 7.158 0 1 1-14.316 0 7.158 7.158 0 0 1 14.316 0v0Z"
    />
  </svg>
);
export default SearchIcon;
