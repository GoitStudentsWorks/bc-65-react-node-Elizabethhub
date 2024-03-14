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

const ModalAddWater = () => {

  return (
        <StyledModalForm>

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
            <StyledModalAddInput type="" placeholder="7:00" name="time" />
          </StyledModalAddTime>
          <StyledModalAddValue>
            <h3>Enter the value of the water used:</h3>
            <StyledModalAddInput type="number" placeholder="50" name="value" />
          </StyledModalAddValue>

          <StyledModalAddSave>
            <span>50ml</span>
            <button>Save</button>
          </StyledModalAddSave>
        </StyledModalForm>
  );
};

export default ModalAddWater;
