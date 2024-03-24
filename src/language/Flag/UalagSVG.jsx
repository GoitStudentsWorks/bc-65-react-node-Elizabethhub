const UalagSVG = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={32} height={32} {...props}>
    <path fill="#2455b2" d="M31 8a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v9h30V8Z" />
    <path fill="#f9da49" d="M5 28h22a4 4 0 0 0 4-4v-8H1v8a4 4 0 0 0 4 4Z" />
    <path
      d="M5 28h22a4 4 0 0 0 4-4V8a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v16a4 4 0 0 0 4 4ZM2 8c0-1.654 1.346-3 3-3h22c1.654 0 3 1.346 3 3v16c0 1.654-1.346 3-3 3H5c-1.654 0-3-1.346-3-3V8Z"
      opacity={0.15}
    />
    <path
      fill="#fff"
      d="M27 5H5a3 3 0 0 0-3 3v1a3 3 0 0 1 3-3h22a3 3 0 0 1 3 3V8a3 3 0 0 0-3-3Z"
      opacity={0.2}
    />
  </svg>
);
export default UalagSVG;
