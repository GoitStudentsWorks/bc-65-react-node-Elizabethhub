import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { modalIsOpen } from '../../store/water/selectors.js';
import { changeModalClose } from '../../store/water/waterSlice.js';
import SvgCross from '../../images/svg/svgModal/SvgCross';
import {
  ClickAwayListener,
  FormControlLabel,
  Radio,
  RadioGroup,
  // Modal,
} from '@mui/material';
import {
  StyledBackdrop,
  StyledCross,
  StyledInputBox,
  StyledWrapper,
} from './ModalDailyNorma.styled.js';

const ModalDailyNorma = () => {
  const dispatch = useDispatch();

  const genderDescription = [
    {
      gender: 'girl',
      massRate: '0,03',
      timeRate: '0,4',
    },
    {
      gender: 'man',
      massRate: '0,04',
      timeRate: '0,6',
    },
  ];
  //***NOTE  */ radio buttons state and handling ***//
  const [value, setValue] = useState('woman');
  const [massQuery, setMassQuery] = useState('');
  const [timeQuery, setTimeQuery] = useState('');
  const [waterQuery, setWaterQuery] = useState('');
  const handleGenderChange = (event) => {
    setValue(event.target.value);
  };
  // const isDisabled = oldDataType === value;
  const radioInputs = [
    {
      value: 'woman',
      label: 'For woman',
    },
    {
      value: 'man',
      label: 'For man',
    },
  ];
  const isModalOpen = useSelector(modalIsOpen);

  const clickBackdrop = (e) => {
    if (e.target === e.currentTarget) {
      dispatch(changeModalClose(false));
    }
  };
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

  return (
    <StyledBackdrop open={isModalOpen} onClick={clickBackdrop}>
      <ClickAwayListener onClickAway={clickBackdrop}>
        <StyledWrapper>
          <h1>My daily norma</h1>
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
                  <li key={`${gender}+${massRate}`}>
                    <p>
                      For
                      <span>
                        {` ${gender} V=(M*${massRate}) + (T*${timeRate})`}
                      </span>
                    </p>
                  </li>
                );
              })}
            </ul>
          </div>
          <p>
            *V is the volume of the water norm in liters per day, M is your body
            weight, T is the time of active sports, or another type of activity
            commensurate in terms of loads (in the absence of these, you must
            set 0)
          </p>
          <h2>Calculate your rate: </h2>
          <RadioGroup
            row
            aria-labelledby="radio-buttons"
            defaultValue="external"
            name="radio-buttons-group"
            // value={value}
            onChange={handleGenderChange}
            sx={{
              '& .MuiTypography-root': {
                fontSize: 13,
              },
            }}
            style={{ display: 'flex', justifyContent: 'space-around' }}
          >
            {radioInputs.map((radioItem, idx) => {
              return (
                <FormControlLabel
                  // disabled={oldDataType === radioItem.value}
                  value={radioItem.value}
                  control={<Radio size="small" />}
                  label={radioItem.label}
                  checked={value === radioItem.value}
                  key={`${idx}+${radioItem.value}`}
                />
              );
            })}
          </RadioGroup>
          <StyledInputBox>
            <p>Your weight in kilograms:</p>
            <input
              type="text"
              value={massQuery}
              onChange={handleMassInput}
              placeholder="0"
            />
          </StyledInputBox>
          <StyledInputBox>
            <p>
              The time of active participation in sports or other activities
              with a high physical. load in hours:
            </p>
            <input
              type="text"
              value={timeQuery}
              onChange={handleTimeInput}
              placeholder="0"
            />
          </StyledInputBox>
          The required amount of water in liters per day: 1.8 L
          <StyledInputBox>
            <p>Write down how much water you will drink:</p>
            <input
              type="text"
              value={waterQuery}
              onChange={handleWaterInput}
              placeholder="0"
            />
          </StyledInputBox>
          <button type="button">Save</button>
        </StyledWrapper>
      </ClickAwayListener>
    </StyledBackdrop>
  );
};

export default ModalDailyNorma;
