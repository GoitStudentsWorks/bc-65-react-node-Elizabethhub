import SvgPlus from '../../images/svg/svgModal/SvgPlus.jsx';
import SvgMinus from '../../images/svg/svgModal/SvgMinus.jsx';
import {
  StyledModalAddSave,
  StyledModalAddTime,
  StyledModalAddTracker,
  StyledModalAddValue,
  StyledModalForm,
} from '../ModalAddWater/ModalAddWaterStyled.js';
import { StyledModalEditInput, StyledModalEditStat } from './ModalEditWater.styled.js';

const ModalEditWater = () => {
  return (
    <StyledModalForm>
      <StyledModalEditStat>
        {/* <svg /> */}
        <span>250ml</span>
        <p>7:00 AM</p>
      </StyledModalEditStat>
      <h3>Correct entered data:</h3>
      <p>Amount of water:</p>

      <StyledModalAddTracker>
        <button type="button">
          <SvgMinus size="24" />
        </button>
        <span>250ml</span>
        <button type="button">
          <SvgPlus size="24" />
        </button>
      </StyledModalAddTracker>

      <StyledModalAddTime>
        <p>Recording time:</p>
        <StyledModalEditInput type="number" placeholder="7:00" name="time" />
      </StyledModalAddTime>
      
      <StyledModalAddValue>
        <h3>Enter the value of the water used:</h3>
        <StyledModalEditInput type="number" placeholder="250" name="value" />
      </StyledModalAddValue>

      <StyledModalAddSave>
        <span>250ml</span>
        <button>Save</button>
      </StyledModalAddSave>
    </StyledModalForm>
  );
};

export default ModalEditWater;
