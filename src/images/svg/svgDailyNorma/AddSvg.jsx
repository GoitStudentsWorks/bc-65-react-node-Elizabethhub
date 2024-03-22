import { useTheme } from 'styled-components';
import { Svg } from '../../../components/DailyNorma/WaterRatio.styled';

const AddSvg = () => {
  const theme = useTheme();
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      fill="none"
      viewBox="0 0 20 20"
    >
      <path
        stroke={theme.svgAddSvg}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M10 7v6m3-3H7m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
      ></path>
    </Svg>
  );
};

export default AddSvg;
