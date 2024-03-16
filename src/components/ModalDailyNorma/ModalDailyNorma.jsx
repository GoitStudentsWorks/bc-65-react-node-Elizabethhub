import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { isModalDayNorm } from '../../store/water/selectors';
import { changeModalClose } from '../../store/water/waterSlice.js';
import { genderDescription, radioInputs, textData } from './heper.js';
import {
  FormControlLabel,
  Radio,
  RadioGroup,
  // Modal,
} from '@mui/material';
import {
  SaveButton,
  StyledBackdrop,
  StyledCross,
  StyledInputBox,
  StyledRequiredLitres,
  StyledWrapper,
} from './ModalDailyNorma.styled.js';
import SvgCross from '../../images/svg/svgModal/SvgCross';
import SvgRadioChecked from '../../images/svg/svgModal/SvgRadioChecked.jsx';
import SvgRadio from '../../images/svg/svgModal/SvgRadio.jsx';

const ModalDailyNorma = () => {
  const isModalOpen = useSelector(isModalDayNorm);
  const dispatch = useDispatch();

  //***NOTE  */ radio buttons state and handling ***//
  const [value, setValue] = useState('woman');
  const [massQuery, setMassQuery] = useState('');
  const [timeQuery, setTimeQuery] = useState('');
  const [waterQuery, setWaterQuery] = useState('');
  const handleGenderChange = (event) => {
    setValue(event.target.value);
  };
  // const isDisabled = oldDataType === value;

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
    document.addEventListener('keydown', handleKeyDown);

    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [dispatch]);

  const handleMassInput = (e) => {
    const inputQuery = e.target.value;
    setMassQuery(inputQuery);
  };
  const handleTimeInput = (e) => {
    const inputQuery = e.target.value;
    setTimeQuery(inputQuery);
  };
  const handleWaterInput = (e) => {
    const inputQuery = e.target.value;
    setWaterQuery(inputQuery);
  };

  const { hint, time, rate, weight, waterAmount, howMuch } = textData;

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
          <div>
            <ul>
              {genderDescription.map((genderData) => {
                const { gender, massRate, timeRate } = genderData;
                return (
                  <li className="formula" key={`${gender}+${massRate}`}>
                    <p>
                      For {gender}:
                      <span>{` V=(M*${massRate}) + (T*${timeRate})`}</span>
                    </p>
                  </li>
                );
              })}
            </ul>
          </div>
          <p className="hint">
            <span className="star">*</span> {hint}
          </p>
          <h3>{rate}</h3>
          <RadioGroup
            row
            aria-labelledby="radio-buttons"
            defaultValue="woman"
            name="radio-buttons-group"
            value={value}
            onChange={handleGenderChange}
            sx={{
              '& .MuiTypography-root': {
                fontSize: 16,
                color: 'var(--black)',
              },
            }}
            style={{
              display: 'flex',
              justifyContent: 'flex-start',
              padding: 0,
              marginBottom: 10,
              paddingLeft: 5,
            }}
          >
            {radioInputs.map((radioItem, idx) => {
              return (
                <FormControlLabel
                  // disabled={oldDataType === radioItem.value}
                  value={radioItem.value}
                  control={
                    <Radio
                      checkedIcon={<SvgRadioChecked></SvgRadioChecked>}
                      icon={<SvgRadio></SvgRadio>}
                      style={{
                        padding: 7,
                        // &:focus:outline: 'none',
                      }}
                    />
                  }
                  label={radioItem.label}
                  checked={value === radioItem.value}
                  key={`${idx}+${radioItem.value}`}
                />
              );
            })}
          </RadioGroup>
          <StyledInputBox>
            <p className="no-margin">{weight}</p>
            <input
              type="text"
              value={massQuery}
              onChange={handleMassInput}
              placeholder="0"
            />
          </StyledInputBox>
          <StyledInputBox>
            <p className="no-margin">{time}</p>
            <input
              type="text"
              value={timeQuery}
              onChange={handleTimeInput}
              placeholder="0"
            />
          </StyledInputBox>
          <StyledRequiredLitres>
            <p>{waterAmount}</p>
            <span>1.8 L</span>
          </StyledRequiredLitres>
          <StyledInputBox>
            <h3>{howMuch}</h3>
            <input
              type="text"
              value={waterQuery}
              onChange={handleWaterInput}
              placeholder="0"
            />
          </StyledInputBox>
          <SaveButton type="button">Save</SaveButton>
        </StyledWrapper>
      </StyledBackdrop>
    )
  );
};

export default ModalDailyNorma;
