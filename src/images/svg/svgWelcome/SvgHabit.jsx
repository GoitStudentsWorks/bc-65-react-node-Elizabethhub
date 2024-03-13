const SvgHabit = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={26}
    height={26}
    fill="none"
    {...props}
  >
    <path
      stroke="#407BFF"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M6 1v3m14-3v3M1 22V7a3 3 0 0 1 3-3h18a3 3 0 0 1 3 3v15M1 22a3 3 0 0 0 3 3h18a3 3 0 0 0 3-3M1 22V12a3 3 0 0 1 3-3h18a3 3 0 0 1 3 3v10m-12-8h.01v.01H13V14Zm0 3h.01v.01H13V17Zm0 3h.01v.01H13V20Zm-3-3h.01v.01H10V17Zm0 3h.01v.01H10V20Zm-3-3h.01v.01H7V17Zm0 3h.01v.01H7V20Zm9-6h.01v.01H16V14Zm0 3h.01v.01H16V17Zm0 3h.01v.01H16V20Zm3-6h.01v.01H19V14Zm0 3h.01v.01H19V17Z"
    />
  </svg>
);
export default SvgHabit;
