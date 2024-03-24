import { useTheme } from 'styled-components';

const RadioChecked = (props) => {
  const theme = useTheme();
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={14}
      height={14}
      fill="none"
      {...props}
    >
      <circle
        cx={7}
        cy={7}
        r={6.5}
        fill={theme.settingRadioButtonFill}
        stroke={theme.settingRadioButtonStroke}
      />
      <circle cx={7} cy={7} r={3} fill={theme.settingRadioButtonStroke} />
    </svg>
  );
};
export default RadioChecked;
