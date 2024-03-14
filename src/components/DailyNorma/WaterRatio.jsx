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
import { useDispatch, useSelector } from 'react-redux';
import { modalIsOpen } from '../../store/water/selectors';
import { changeModalAddForm } from '../../store/water/waterSlice';
import ModalWater from '../ModalWater/ModalWater';
const WaterRatio = () => {
  const isModalOpen = useSelector(modalIsOpen);
  const dispatch = useDispatch();

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
      <RangeButton
        onClick={() => {
          dispatch(changeModalAddForm(true));
        }}
      >
        Add Water
      </RangeButton>
      <AddSvg />
      {isModalOpen && <ModalWater />}
    </RangeWrapper>
  );
};

export default WaterRatio;
