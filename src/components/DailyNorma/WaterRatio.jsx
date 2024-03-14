import React from 'react';
import {
  RangeButton,
  // RangeInput,
  RangeInputTitl,
  RangePercent,
  RangePercentWrap,
  RangeSpanLine,
  RangeWrapper,
} from './WaterRatio.styled';
import AddSvg from '../../images/svg/AddSvg';
import InputComponent from './InputComponent';
const WaterRatio = ({ openModal }) => {
  return (
    <RangeWrapper>
      <div>
        <RangeInputTitl>Today</RangeInputTitl>
        {/* <RangeInput type="range"></RangeInput> */}
        <InputComponent />
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
      </div>
      <RangeButton onClick={() => openModal('addWater')}>
        <AddSvg />
        Add Water
      </RangeButton>
    </RangeWrapper>
  );
};

export default WaterRatio;
