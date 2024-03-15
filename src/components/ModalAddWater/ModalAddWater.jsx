import SvgPlus from '../../images/svg/svgModal/SvgPlus.jsx';
import SvgMinus from '../../images/svg/svgModal/SvgMinus.jsx';
import {
  StyledModalAddInput,
  StyledModalAddSave,
  StyledModalAddTime,
  StyledModalAddTracker,
  StyledModalAddValue,
  StyledModalForm,
} from './ModalAddWaterStyled.js';
import { useState } from 'react';

const ModalAddWater = () => {
  const [counter, setCounter] = useState(50);

  const MIN_VALUE = 0;
  const MAX_VALUE = 1500;

  const handleClickTracker = () => {
    if (counter > MIN_VALUE) {
      setCounter(counter - 50);
    }
  };

  const handleClickCounter = () => {
    if (counter < MAX_VALUE) {
      setCounter(counter + 50);
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <StyledModalForm onSubmit={onSubmit}>
      <h3>Choose a value:</h3>
      <p>Amount of water:</p>

      <StyledModalAddTracker>
        <button type="button" onClick={handleClickTracker}>
          <SvgMinus size="24" />
        </button>
        <span>{`${counter}ml`}</span>
        <button type="button" onClick={handleClickCounter}>
          <SvgPlus size="24" />
        </button>
      </StyledModalAddTracker>

      <StyledModalAddTime>
        <p>Recording time:</p>
        {/* TODO: change to time format */}
        <StyledModalAddInput
          type="number"
          // id="time"
          placeholder="7:00"
          name="time"
        />
      </StyledModalAddTime>
      <StyledModalAddValue>
        <h3>Enter the value of the water used:</h3>
        <StyledModalAddInput
          type="number"
          id="ml"
          placeholder="50"
          name="value"
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
