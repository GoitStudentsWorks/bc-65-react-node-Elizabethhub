import React from 'react';
import {
  RangeButton,
  RangeInput,
  RangeInputTitl,
  RangePercent,
  RangePercentWrap,
  RangeSpanLine,
  RangeWrapper,
} from './WaterRatio.styled';
import AddSvg from '../../images/svg/AddSvg';
const WaterRatio = () => {
  return (
    <RangeWrapper>
      <RangeInputTitl>Today</RangeInputTitl>
      <RangeInput type="range"></RangeInput>
      <RangePercentWrap>
        <RangePercent>
          <RangeSpanLine>|</RangeSpanLine>
          0%
        </RangePercent>
        <RangePercent $fsize="16px" $fweight="500">
          <RangeSpanLine>|</RangeSpanLine>
          50%
        </RangePercent>
        <RangePercent>
          <RangeSpanLine>|</RangeSpanLine>
          100%
        </RangePercent>
      </RangePercentWrap>
      <RangeButton>Add Water</RangeButton>
      <AddSvg />
    </RangeWrapper>
  );
};

export default WaterRatio;
