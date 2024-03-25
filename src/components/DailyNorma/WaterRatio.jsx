import {
  RangeWrapper,
  RangeButton,
  RangePercent,
  RangePercentWrap,
  RangeSpanLine,
  RangeInputTitle,
  RemainingWaterContainer,
  RemainingWaterSpan,
} from './WaterRatio.styled';
import AddSvg from '../../images/svg/svgDailyNorma/AddSvg';

import InputComponent from './InputComponent';

import { useDispatch, useSelector } from 'react-redux';
import { changeModalAddForm } from '../../store/water/waterSlice';
import ModalWater from '../ModalWater/ModalWater';
import { modalIsOpen, selectorWaterInfo } from '../../store/water/selectors';
import { useTranslation } from 'react-i18next';
import { selectDailyWater } from '../../store/auth/selectors';

const WaterRatio = () => {
  const { t } = useTranslation();
  const isModalOpen = useSelector(modalIsOpen);
  const dispatch = useDispatch();
  const userDailyWater = useSelector(selectDailyWater);

  const percentageRangeValue = useSelector(selectorWaterInfo);

  const remainingWater =
    (userDailyWater - (percentageRangeValue * userDailyWater) / 100) / 1000;

  return (
    <RangeWrapper>
      <div>
        <RemainingWaterContainer>
          <RangeInputTitle>{t('today')}</RangeInputTitle>
          {remainingWater > 0 ? (
            <RemainingWaterSpan>
              Left to drink {remainingWater.toFixed(1)}L
            </RemainingWaterSpan>
          ) : (
            <RemainingWaterSpan>The daily rate of drinking</RemainingWaterSpan>
          )}
        </RemainingWaterContainer>
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
        {t('addwater')}
      </RangeButton>
      {isModalOpen && <ModalWater />}
    </RangeWrapper>
  );
};

export default WaterRatio;
