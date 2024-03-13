const SvgView = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={28}
    height={26}
    fill="none"
    {...props}
  >
    <path
      stroke="#407BFF"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3 1v15a3 3 0 0 0 3 3h3M3 1H1m2 0h22M9 19h10M9 19l-1.333 4M25 1h2m-2 0v15a3 3 0 0 1-3 3h-3m0 0 1.333 4M7.667 23h12.666M7.667 23 7 25m13.333-2L21 25M10 12v2m4-5v5m4-8v8"
    />
  </svg>
);
export default SvgView;
