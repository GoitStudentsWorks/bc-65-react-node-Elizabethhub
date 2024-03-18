import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { isModalDayNorm } from '../../store/water/selectors';
import {
  changeModalClose,
  changeDayNorma,
} from '../../store/water/waterSlice.js';
import {
  calculateVolume,
  handleInput,
  textData,
} from '../../helpers/ModalDayNorma/helper.js';
import {
  SaveButton,
  StyledBackdrop,
  StyledCross,
  StyledRequiredLitres,
  StyledWrapper,
} from './ModalDailyNorma.styled.js';
import SvgCross from '../../images/svg/svgModal/SvgCross';
import FormulaField from './FormulaField.jsx';
import RadioGroupComponent from './RadioGroup.jsx';
import InputBox from './InputBox.jsx';

const ModalDailyNorma = () => {
  const isModalOpen = useSelector(isModalDayNorm);
  const dispatch = useDispatch();

  const [genderValue, setGenderValue] = useState('woman');
  const [massQuery, setMassQuery] = useState('');
  const [timeQuery, setTimeQuery] = useState('');
  const [waterQuery, setWaterQuery] = useState('');
  const [volume, setVolume] = useState('');

  const clickBackdrop = (e) => {
    if (e.target === e.currentTarget) {
      dispatch(changeModalClose(false));
    }
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        dispatch(changeModalClose(false));
      }
    };
    document.body.style.overflow = isModalOpen ? 'hidden' : 'auto';
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = 'auto';
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [dispatch, isModalOpen]);

  useEffect(() => {
    setVolume(calculateVolume(massQuery, timeQuery, genderValue));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [massQuery, timeQuery, genderValue]);

  const handleGenderChange = (event) => {
    setGenderValue(event.target.value);
  };
  const handleMassInput = (e) => {
    handleInput(e, setMassQuery);
  };

  const handleTimeInput = (e) => {
    handleInput(e, setTimeQuery);
  };

  const handleWaterInput = (e) => {
    handleInput(e, setWaterQuery);
  };

  const handleSaveBtn = () => {
    dispatch(changeDayNorma(waterQuery));
    setTimeout(() => {
      dispatch(changeModalClose(false));
    }, 300);
  };

  const { time, weight, waterAmount, howMuch } = textData;

  return (
    isModalOpen && (
      <StyledBackdrop open={isModalOpen} onClick={clickBackdrop}>
        <StyledWrapper>
          <h2>My daily norma</h2>
          <StyledCross
            onClick={() => {
              dispatch(changeModalClose(false));
            }}
          >
            <SvgCross />
          </StyledCross>
          <FormulaField />
          <RadioGroupComponent
            genderValue={genderValue}
            handleGenderChange={handleGenderChange}
          />
          <InputBox
            paragrName={weight}
            inputName={'mass'}
            inputValue={massQuery}
            handler={handleMassInput}
          />
          <InputBox
            paragrName={time}
            inputName={'time'}
            inputValue={timeQuery}
            handler={handleTimeInput}
          />
          <StyledRequiredLitres>
            <p>{waterAmount}</p>
            <span>{volume || 1.8} L</span>
          </StyledRequiredLitres>
          <InputBox
            paragrName={howMuch}
            inputName={'waterVolume'}
            inputValue={waterQuery}
            handler={handleWaterInput}
          />
          <SaveButton type="button" onClick={handleSaveBtn}>
            Save
          </SaveButton>
        </StyledWrapper>
      </StyledBackdrop>
    )
  );
};

export default ModalDailyNorma;
