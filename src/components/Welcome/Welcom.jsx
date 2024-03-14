import SvgHabit from '../../images/svg/svgWelcome/SvgHabit';
import SvgPersonal from '../../images/svg/svgWelcome/SvgPersonal';
import SvgView from '../../images/svg/svgWelcome/SvgView';
// import ModalDailyNorma from '../ModalDailyNorma/ModalDailyNorma';

import {
  DivImgContainerWelcome,
  WelcomeDivCantainer,
  WelcomeLi,
  WelcomeNavLink,
  WelcomeUl,
  WelcomeWhyDrinkDivCantainer,
  WelcomeWhyDrinkLi,
  Welcomeh1,
  Welcomeh2,
  Welcomeh3,
} from './WelcomStyled';

const Welcom = () => {
  return (
    <>
      <DivImgContainerWelcome />

      <WelcomeDivCantainer>
        <div>
          {/* <ModalDailyNorma /> */}
          <Welcomeh1>Water consumption tracker</Welcomeh1>
          <Welcomeh2>Record daily water intake and track</Welcomeh2>
          <Welcomeh3>Tracker Benefits</Welcomeh3>
          <WelcomeUl>
            <WelcomeLi>
              <SvgHabit />
              <span>Habit drive</span>
            </WelcomeLi>
            <WelcomeLi>
              <SvgView />
              <span>View statistics</span>
            </WelcomeLi>
            <WelcomeLi>
              <SvgPersonal />
              <span>Personal rate setting</span>
            </WelcomeLi>
            <WelcomeNavLink to="/signin" style={{ textDecoration: 'none' }}>
              Try tracker
            </WelcomeNavLink>
          </WelcomeUl>
        </div>
        <WelcomeWhyDrinkDivCantainer>
          <h3>Why drink water</h3>
          <ul>
            <WelcomeWhyDrinkLi>
              Supply of nutrients to all organs
            </WelcomeWhyDrinkLi>
            <WelcomeWhyDrinkLi>Providing oxygen to the lungs</WelcomeWhyDrinkLi>
            <WelcomeWhyDrinkLi>
              Maintaining the work of the heart
            </WelcomeWhyDrinkLi>
            <WelcomeWhyDrinkLi>
              Release of processed substances
            </WelcomeWhyDrinkLi>
            <WelcomeWhyDrinkLi>
              Ensuring the stability of the internal environment
            </WelcomeWhyDrinkLi>
            <WelcomeWhyDrinkLi>
              Maintaining within the normal temperature
            </WelcomeWhyDrinkLi>
            <WelcomeWhyDrinkLi>
              Maintaining an immune system capable of resisting disease
            </WelcomeWhyDrinkLi>
          </ul>
        </WelcomeWhyDrinkDivCantainer>
      </WelcomeDivCantainer>
    </>
  );
};

export default Welcom;
