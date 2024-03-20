import SvgPlus from '../../images/svg/svgModal/SvgPlus.jsx';
import SvgMinus from '../../images/svg/svgModal/SvgMinus.jsx';
import SvgGlass from '../../images/svg/svgToday/GlassSvg.jsx';
import {
  StyledModalAddSave,
  StyledModalAddTime,
  StyledModalAddTracker,
  StyledModalAddValue,
  StyledModalForm,
  TimeGlobalStyles,
} from '../ModalAddWater/ModalAddWater.styled.js';
import {
  ModalEditDateWrap,
  StyledModalEditInput,
  StyledModalEditStat,
} from './ModalEditWater.styled.js';
import { useEffect, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import useCounter from '../../hooks/modalHandleUpdate.js';
import { format } from 'date-fns';
import { useDispatch } from 'react-redux';
import { editWaterThunk } from '../../store/water/operations.js';
import { changeModalClose } from '../../store/water/waterSlice.js';
import { toast } from 'react-toastify';

const ModalEditWater = ({ waterItem }) => {
  const [time, setTime] = useState(new Date(waterItem?.time));
  const { counter, handleUpdate } = useCounter(waterItem?.milliliters);
  const [manualValue, setManualValue] = useState('');
  const [inputFocused, setInputFocused] = useState(false);
  const [valueSource, setValueSource] = useState('default');
  const [formattedTime, setFormattedTime] = useState(format(time, 'hh:mm a'));

  const dispatch = useDispatch();

  const onSubmit = async (e) => {
    e.preventDefault();

    const updatedWater = {
      milliliters: parseInt(manualValue),
      time,
    };

    dispatch(editWaterThunk({ id: waterItem?._id, water: updatedWater }))
      .unwrap()
      .then(() => {
        dispatch(changeModalClose(false));
        toast.success('Water note was successfully edited');
      })
      .catch((error) => {
        toast.error(error);
      });
  };

  const handleManualValueChange = (e) => {
    let value = e.target.value;
    setValueSource('manual');
    if (
      value !== '' &&
      (isNaN(value) || parseInt(value) > 5000 || parseInt(value) < 1)
    ) {
      value = '5000';
    }
    setManualValue(value);
  };

  // const getDisplayValue = () => {
  //   if (waterItem) {
  //     switch (valueSource) {
  //       case 'manual':
  //         return manualValue
  //           ? `${manualValue}ml`
  //           : `${waterItem?.milliliters}ml`;
  //       case 'counter':
  //         return `${counter}ml`;
  //       default:
  //         return `${waterItem?.milliliters}ml`;
  //     }
  //   } else {
  //     toast.error('This record does not exist');
  //     return `${counter}ml`;
  //   }
  // };

  const handleInputBlur = () => {
    setInputFocused(false);
  };

  const handleInputFocus = () => {
    setInputFocused(true);
  };

  useEffect(() => {
    setManualValue(`${counter}`);
  }, [counter]);

  const displayValue = inputFocused
    ? `${counter}ml`
    : manualValue !== ''
    ? `${manualValue}ml`
    : `${counter}ml`;

  return (
    <StyledModalForm onSubmit={onSubmit}>
      <StyledModalEditStat>
        <SvgGlass />
        <span>{displayValue ? displayValue : `${counter}ml`}</span>
        <p>{formattedTime}</p>
      </StyledModalEditStat>
      <h3>Correct entered data:</h3>
      <p>Amount of water:</p>

      <StyledModalAddTracker>
        <button
          type="button"
          name="decrement"
          onClick={handleUpdate}
          disabled={counter === 0}
        >
          <SvgMinus size="24" />
        </button>
        <span>{displayValue ? displayValue : `${counter}ml`}</span>
        <button type="button" name="increment" onClick={handleUpdate}>
          <SvgPlus size="24" />
        </button>
      </StyledModalAddTracker>

      <StyledModalAddTime>
        <p>Recording time:</p>
        <ModalEditDateWrap>
          <DatePicker
            selected={time}
            onChange={(date) => {
              setTime(date);
            }}
            onBlur={() => {
              const formattedTime = format(time, 'hh:mm a');
              setFormattedTime(formattedTime);
            }}
            showTimeSelect
            showTimeSelectOnly
            timeIntervals={5}
            dateFormat="HH:mm"
            timeFormat="HH:mm"
            minTime={new Date(2024, 1, 1, 0, 0)}
            maxTime={new Date()}
            timeZone="UTC"
          />
          <TimeGlobalStyles />
        </ModalEditDateWrap>
      </StyledModalAddTime>

      <StyledModalAddValue>
        <h3>Enter the value of the water used:</h3>
        <StyledModalEditInput
          type="number"
          // type="text"
          // pattern="[0-9]*"
          placeholder={`${counter}`}
          min="1"
          max="5000"
          name="value"
          value={manualValue}
          onChange={handleManualValueChange}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          required
        />
      </StyledModalAddValue>

      <StyledModalAddSave>
        <span>{displayValue}</span>
        <button type="submit">Save</button>
      </StyledModalAddSave>
    </StyledModalForm>
  );
};

export default ModalEditWater;
