import styled from 'styled-components';

export const SvgPersonalSVG = styled.svg`
  @media only screen and (min-width: 768px) {
    width: 40px;
    height: 40px;
  }
`;

export const SvgPersonalPath = styled.path`
  @media only screen and (min-width: 768px) {
  }
`;

const SvgPersonal = (props) => (
  <SvgPersonalSVG
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    viewBox="0 0 32 32"
    fill="none"
    {...props}
  >
    <SvgPersonalPath
      stroke="#407BFF"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M15.23 20.227 23.005 28a3.536 3.536 0 0 0 5-5l-7.836-7.836m-4.937 5.063 3.328-4.04c.422-.512.986-.835 1.61-1.022.734-.218 1.55-.25 2.324-.186a6 6 0 0 0 5.982-8.448L24.107 10.9a4.006 4.006 0 0 1-3-3l4.368-4.368a6 6 0 0 0-8.448 5.981c.12 1.435-.095 3.019-1.206 3.934l-.136.113m-.454 6.667-6.207 7.537a3.397 3.397 0 1 1-4.781-4.781l9.116-7.507L7.883 10h-1.88l-3-5 2-2 5 3v1.879l5.68 5.68-2.326 1.916M24.504 24.5l-3.5-3.5m-14.51 4.5h.01v.01h-.01v-.01Z"
    />
  </SvgPersonalSVG>
);
export default SvgPersonal;
