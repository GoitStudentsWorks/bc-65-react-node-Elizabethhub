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
import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import useCounter from '../../hooks/modalHandleUpdate.js';
import { useDispatch } from 'react-redux';
import { addWaterThunk } from '../../store/water/operations.js';
import {
  changeModalClose,
  changeTodayList,
} from '../../store/water/waterSlice.js';
import { toast } from 'react-toastify';

const ModalAddWater = () => {
  const { counter, handleUpdate } = useCounter(0);
  const [time, setTime] = useState(new Date());

  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();

    // const currentTime = new Date();

    const water = {
      milliliters: e.target.elements.value.value,
      time: time,
    };

    // const water = {
    //   milliliters: e.target.elements.value.value,
    //   time,
    // };
    dispatch(addWaterThunk(water))
      .unwrap()
      .then(() => {
        dispatch(changeModalClose(false));
        dispatch(changeTodayList({ ...water, _id: crypto.randomUUID() }));
        toast.success('Water note was successfuly added');
      })
      .catch((error) => {
        toast.error(error);
      });
  };
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
        <span>{`${counter}ml`}</span>
        <button type="button" name="increment" onClick={handleUpdate}>
          <SvgPlus size="24" />
        </button>
      </StyledModalAddTracker>

      <StyledModalAddTime>
        <p>Recording time:</p>
        <ModalAddDateWrap>
          {/* <label> */}
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
          {/* </label> */}
        </ModalAddDateWrap>

        {/* <StyledModalAddInput
          type="number"
          placeholder="7:00"
          name="time"
        /> */}
      </StyledModalAddTime>
      <StyledModalAddValue>
        <h3>Enter the value of the water used:</h3>
        <StyledModalAddInput
          type="number"
          placeholder={`${counter}`}
          // defaultValue={`${counter}`}
          min="1"
          max="5000"
          name="value"
          required
        />
      </StyledModalAddValue>

      <StyledModalAddSave>
        <span>{`${counter}ml`}</span>
        <button type="submit">Save</button>
      </StyledModalAddSave>
    </StyledModalForm>
  );
};

export default ModalAddWater;
