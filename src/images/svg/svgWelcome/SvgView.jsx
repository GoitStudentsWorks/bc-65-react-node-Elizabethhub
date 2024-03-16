import styled from 'styled-components';

export const SvgViewSVG = styled.svg`
  @media only screen and (min-width: 768px) {
    width: 40px;
    height: 40px;
  }
`;

export const SvgViewPath = styled.path`
  @media only screen and (min-width: 768px) {
  }
`;

const SvgView = (props) => (
  <SvgViewSVG
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    viewBox="0 0 32 32"
    fill="none"
    {...props}
  >
    <SvgViewPath
      stroke="#407BFF"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M5 4v15a3 3 0 0 0 3 3h3M5 4H3m2 0h22M11 22h10m-10 0-1.333 4M27 4h2m-2 0v15a3 3 0 0 1-3 3h-3m0 0 1.333 4M9.667 26h12.666M9.667 26 9 28m13.333-2L23 28M12 15v2m4-5v5m4-8v8"
    />
  </SvgViewSVG>
);
export default SvgView;
