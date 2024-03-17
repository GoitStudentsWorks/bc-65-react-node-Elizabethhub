// import * as React from "react"
const SvgClose = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={14}
    height={14}
    fill="none"
    {...props}
  >
    <path
      stroke="#407BFF"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M1 13 13 1M1 1l12 12"
    />
  </svg>
);
export default SvgClose;
