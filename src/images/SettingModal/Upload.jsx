import { useTheme } from 'styled-components';

// import * as React from "react"
const Upload = (props) => {
  const theme = useTheme();
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={14}
      height={14}
      fill="none"
      {...props}
    >
      <path
        stroke={theme.settingUploadSvg}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M1 10v1.5A1.5 1.5 0 0 0 2.5 13h9a1.5 1.5 0 0 0 1.5-1.5V10M4 4l3-3m0 0 3 3M7 1v9"
      />
    </svg>
  );
};
export default Upload;
