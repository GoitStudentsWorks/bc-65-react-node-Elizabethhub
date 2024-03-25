import { StyledRangeInput } from './WaterRatio.styled';
import { useSelector } from 'react-redux';
import { selectorWaterInfo } from '../../store/water/selectors';

const InputComponent = () => {
  const percentageRangeValue = useSelector(selectorWaterInfo);

  return (
    <>
      <StyledRangeInput
        type="range"
        min={0}
        max={100}
        value={percentageRangeValue >= 100 ? 100 : percentageRangeValue}
        readOnly
      />
    </>
  );
};

export default InputComponent;
