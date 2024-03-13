import SvgHabit from '../../images/svg/svgWelcome/SvgHabit';
import SvgPersonal from '../../images/svg/svgWelcome/SvgPersonal';
import SvgView from '../../images/svg/svgWelcome/SvgView';
import { DivImgContainerWelcome, WelcomeDivCantainer } from './WelcomStyled';

const Welcom = () => {
  return (
    <>
      <DivImgContainerWelcome />

      <WelcomeDivCantainer>
        <div>
          <h1>Water consumption tracker</h1>
          <h2>Record daily water intake and track</h2>
          <h3>Tracker Benefits</h3>
          <ul>
            <li>
              <SvgHabit />
              <span>Habit drive</span>
            </li>
            <li>
              <SvgView />
              <span>View statistics</span>
            </li>
            <li>
              <SvgPersonal />
              <span>Personal rate setting</span>
            </li>
            <button>Try tracker</button>
          </ul>
        </div>
        <div>
          <h1>Право</h1>
        </div>
      </WelcomeDivCantainer>
    </>
  );
};

export default Welcom;
