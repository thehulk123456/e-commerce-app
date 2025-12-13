import { SVGProps } from "react";

const ReturnIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={40}
    height={40}
    fill="none"
    {...props}>
    <g
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      clipPath="url(#a)">
      <path d="M33.333 18.333A13.5 13.5 0 0 0 7.499 15m-.833-6.667V15h6.667M6.666 21.667A13.5 13.5 0 0 0 32.499 25m.834 6.667V25h-6.667" />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h40v40H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default ReturnIcon;
