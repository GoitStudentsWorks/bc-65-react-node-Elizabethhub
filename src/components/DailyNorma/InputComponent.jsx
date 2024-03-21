// import { useState, useEffect } from 'react';
import { StyledRangeInput } from './WaterRatio.styled';
import { useSelector } from 'react-redux';
import { selectorWaterInfo } from '../../store/water/selectors';

const InputComponent = () => {
  const percentageRangeValue = useSelector(selectorWaterInfo);

  console.log(percentageRangeValue);

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
