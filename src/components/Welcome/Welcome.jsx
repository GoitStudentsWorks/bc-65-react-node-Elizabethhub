import { useTranslation } from 'react-i18next';
import DesctopWoter from '../../images/backgroundImg/backgraundSvg/DesctopWoter';
import TabletWoter from '../../images/backgroundImg/backgraundSvg/TabletWoter';
import SvgHabit from '../../images/svg/svgWelcome/SvgHabit';
import SvgPersonal from '../../images/svg/svgWelcome/SvgPersonal';
import SvgView from '../../images/svg/svgWelcome/SvgView';

import {
  DesctopWoterDivImg,
  DivImgContainerWelcome,
  TabletWoterDivImg,
  WelcomeDivCantainer,
  WelcomeLi,
  WelcomeLiSpan,
  WelcomeNavLink,
  WelcomeUl,
  WelcomeWhyDrinkDivCantainer,
  WelcomeWhyDrinkH3,
  WelcomeWhyDrinkLi,
  WelcomeWhyDrinkUl,
  Welcomeh1,
  Welcomeh2,
  Welcomeh3,
} from './Welcome.styled';

const Welcome = () => {
  const { t } = useTranslation();

  return (
    <>
      {/* <DivImgContainerWelcome /> */}
      <TabletWoterDivImg>
        <TabletWoter />
      </TabletWoterDivImg>
      <DesctopWoterDivImg>
        <DesctopWoter />
      </DesctopWoterDivImg>

      <WelcomeDivCantainer>
        <div>
          <Welcomeh1>{t('waterconsumptiontracker')}</Welcomeh1>
          <Welcomeh2>Record daily water intake and track</Welcomeh2>
          <Welcomeh3>Tracker Benefits</Welcomeh3>
          <WelcomeUl>
            <WelcomeLi>
              <SvgHabit />
              <WelcomeLiSpan>Habit drive</WelcomeLiSpan>
            </WelcomeLi>
            <WelcomeLi>
              <SvgView />
              <WelcomeLiSpan>View statistics</WelcomeLiSpan>
            </WelcomeLi>
            <WelcomeLi>
              <SvgPersonal />
              <WelcomeLiSpan>Personal rate setting</WelcomeLiSpan>
            </WelcomeLi>
          </WelcomeUl>

          <WelcomeNavLink to="/signin" style={{ textDecoration: 'none' }}>
            Try tracker
          </WelcomeNavLink>
        </div>
        <WelcomeWhyDrinkDivCantainer>
          <WelcomeWhyDrinkH3>Why drink water</WelcomeWhyDrinkH3>
          <WelcomeWhyDrinkUl>
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
          </WelcomeWhyDrinkUl>
        </WelcomeWhyDrinkDivCantainer>
      </WelcomeDivCantainer>
    </>
  );
};

export default Welcome;
