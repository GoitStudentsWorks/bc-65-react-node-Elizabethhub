import SvgCross from '../../images/svg/svgModal/SvgCross.jsx';
import SvgPlus from '../../images/svg/svgModal/SvgPlus.jsx';
import SvgMinus from '../../images/svg/svgModal/svgMinus.jsx';
import {
  StyledModalAddBackdrop,
  StyledModalAddClose,
  StyledModalAddSave,
  StyledModalAddTime,
  StyledModalAddTracker,
  StyledModalAddValue,
  StyledModalAddWrapper,
} from './ModalAddWaterStyled.js';

const ModalAddWater = ({ onClose }) => {
  return (
    <StyledModalAddBackdrop>
      <StyledModalAddWrapper>
        <form>
          <h2>Add water</h2>
          <StyledModalAddClose onClick={onClose}>
            <SvgCross />
          </StyledModalAddClose>

          <h3>Choose a value:</h3>
          <p>Amount of water:</p>

          <StyledModalAddTracker>
            <button type="button">
              <SvgMinus size="24" />
            </button>
            <span>50ml</span>
            <button type="button">
              <SvgPlus size="24" />
            </button>
          </StyledModalAddTracker>

          <StyledModalAddTime>
            <p>Recording time:</p>
            <input type="" placeholder="7:00" name="time" />
          </StyledModalAddTime>
          <StyledModalAddValue>
            <h3>Enter the value of the water used:</h3>
            <input type="number" placeholder="50" name="value" />
          </StyledModalAddValue>

          <StyledModalAddSave>
            <span>50ml</span>
            <button onClick={onClose}>Save</button>
          </StyledModalAddSave>
        </form>
      </StyledModalAddWrapper>
    </StyledModalAddBackdrop>
  );
};

export default ModalAddWater;
