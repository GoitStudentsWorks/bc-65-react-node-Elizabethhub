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
import { useDispatch } from 'react-redux';
import { changeModalAddForm } from '../../store/water/waterSlice';

const WaterRatio = () => {
  const dispatch = useDispatch();

  return (
    <RangeWrapper>
      <RangeInputTitl>Today</RangeInputTitl>
      {/* <RangeInput type="range"></RangeInput> */}
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
      <RangeButton
        onClick={() => {
          dispatch(changeModalAddForm(true));
        }}
      >
        Add Water
      </RangeButton>
      <AddSvg />
    </RangeWrapper>
  );
};

export default WaterRatio;
