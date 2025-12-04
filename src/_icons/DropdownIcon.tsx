import { SVGProps } from "react";

const DropdownIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}>
    <path
      fill="#000"
      d="M12.95 11.636 8 6.686l1.414-1.414 6.364 6.364L9.414 18 8 16.586l4.95-4.95Z"
    />
  </svg>
);
export default DropdownIcon;
