import { useTheme } from 'styled-components';

const HeaderSVGPhoto = (props) => {
  const theme = useTheme();

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={28}
      height={28}
      fill="none"
      {...props}
    >
      <g stroke={theme.iconHeader} clipPath="url(#a)">
        <circle cx={14} cy={14} r={13.5} />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M17.5 8.256c0 .952-.368 1.865-1.025 2.538A3.457 3.457 0 0 1 14 11.845a3.457 3.457 0 0 1-2.475-1.05 3.637 3.637 0 0 1-1.026-2.54c0-.951.37-1.864 1.026-2.538A3.457 3.457 0 0 1 14 4.666c.928 0 1.819.378 2.475 1.051A3.637 3.637 0 0 1 17.5 8.256ZM7 21.77c.03-1.883.78-3.68 2.09-5A6.912 6.912 0 0 1 14 14.708c1.837 0 3.6.74 4.91 2.062a7.269 7.269 0 0 1 2.09 5 16.39 16.39 0 0 1-7 1.563c-2.498 0-4.869-.56-7-1.563Z"
        />
      </g>
      <defs>
        <clipPath id="a">
          <path fill="#fff" d="M0 0h28v28H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default HeaderSVGPhoto;
// 2F2F2F
