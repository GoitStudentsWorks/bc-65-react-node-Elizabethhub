import React from 'react';
import {
  RangeButton,
  RangeInputTitl,
  RangePercent,
  RangePercentWrap,
  RangeSpanLine,
  RangeWrapper,
} from './WaterRatio.styled';
import AddSvg from '../../images/svg/AddSvg';
import { useDispatch } from 'react-redux';
import { changeModalAddForm } from '../../store/water/waterSlice';
import InputComponent from './InputComponent';

const WaterRatio = () => {
  const dispatch = useDispatch();

  return (
    <RangeWrapper>
      <div>
        <RangeInputTitl>Today</RangeInputTitl>
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
      <RangeButton
        onClick={() => {
          dispatch(changeModalAddForm(true));
        }}
      >
        <AddSvg />
        Add Water
      </RangeButton>
    </RangeWrapper>
  );
};

export default WaterRatio;
