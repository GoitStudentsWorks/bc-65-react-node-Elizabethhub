import React, { useState, useEffect } from 'react';
import { StyledRangeInput } from './WaterRatio.styled';

const InputComponent = () => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    const rangeValue = 0;
    setValue(rangeValue);
  }, []);

  return (
    <>
      <StyledRangeInput type="range" min={0} max={100} value={value} readOnly />
      {/* <StyledRangeSpan>{value}</StyledRangeSpan> */}
    </>
  );
};

export default InputComponent;
