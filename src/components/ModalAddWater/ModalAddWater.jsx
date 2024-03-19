import SvgPlus from '../../images/svg/svgModal/SvgPlus.jsx';
import SvgMinus from '../../images/svg/svgModal/SvgMinus.jsx';
import {
  ModalAddDateWrap,
  StyledModalAddInput,
  StyledModalAddSave,
  StyledModalAddTime,
  StyledModalAddTracker,
  StyledModalAddValue,
  StyledModalForm,
  TimeGlobalStyles,
} from './ModalAddWater.styled.js';
import { useEffect, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import useCounter from '../../hooks/modalHandleUpdate.js';
import { useDispatch } from 'react-redux';
import { addWaterThunk } from '../../store/water/operations.js';
import { changeModalClose } from '../../store/water/waterSlice.js';
import { toast } from 'react-toastify';

const ModalAddWater = () => {
  const { counter, handleUpdate } = useCounter(0);
  const [time, setTime] = useState(new Date());
  const [manualValue, setManualValue] = useState('');
  const [inputFocused, setInputFocused] = useState(false);

  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();
    const water = {
      milliliters: e.target.elements.value.value,
      time,
    };
    dispatch(addWaterThunk(water))
      .unwrap()
      .then(() => {
        dispatch(changeModalClose(false));
        toast.success('Water note was successfuly added');
      })
      .catch((error) => {
        toast.error(error);
      });
  };

  const handleManualValueChange = (e) => {
    const value = e.target.value;
    setManualValue(value);
  };

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
      <h3>Choose a value:</h3>
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
        <ModalAddDateWrap>
          <DatePicker
            selected={time}
            onChange={(date) => {
              setTime(date);
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
        </ModalAddDateWrap>
      </StyledModalAddTime>
      <StyledModalAddValue>
        <h3>Enter the value of the water used:</h3>
        <StyledModalAddInput
          type="number"
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

export default ModalAddWater;
