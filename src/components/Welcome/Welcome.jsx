import { useTranslation } from 'react-i18next';
import DesctopWoter from '../../images/backgroundImg/backgraundSvg/DesctopWoter';
import TabletWoter from '../../images/backgroundImg/backgraundSvg/TabletWoter';
import SvgHabit from '../../images/svg/svgWelcome/SvgHabit';
import SvgPersonal from '../../images/svg/svgWelcome/SvgPersonal';
import SvgView from '../../images/svg/svgWelcome/SvgView';

import {
  DesctopWoterDivImg,
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
          <Welcomeh2>{t('recorddailywaterintakeandtrack')}</Welcomeh2>
          <Welcomeh3>{t('trackerBenefits')}</Welcomeh3>
          <WelcomeUl>
            <WelcomeLi>
              <SvgHabit />
              <WelcomeLiSpan>{t('habitDrive')}</WelcomeLiSpan>
            </WelcomeLi>
            <WelcomeLi>
              <SvgView />
              <WelcomeLiSpan>{t('viewStatistics')}</WelcomeLiSpan>
            </WelcomeLi>
            <WelcomeLi>
              <SvgPersonal />
              <WelcomeLiSpan>{t('personalRateSetting')}</WelcomeLiSpan>
            </WelcomeLi>
          </WelcomeUl>

          <WelcomeNavLink to="/signin" style={{ textDecoration: 'none' }}>
            {t('tryTracker')}
          </WelcomeNavLink>
        </div>
        <WelcomeWhyDrinkDivCantainer>
          <WelcomeWhyDrinkH3>{t('whyDrinkWater')}</WelcomeWhyDrinkH3>
          <WelcomeWhyDrinkUl>
            <WelcomeWhyDrinkLi>{t('supplyOfNutrients')}</WelcomeWhyDrinkLi>
            <WelcomeWhyDrinkLi>{t('providingOxygen')}</WelcomeWhyDrinkLi>
            <WelcomeWhyDrinkLi>
              {t('maintainingHeartFunction')}
            </WelcomeWhyDrinkLi>
            <WelcomeWhyDrinkLi>
              {t('releaseOfProcessedSubstances')}
            </WelcomeWhyDrinkLi>
            <WelcomeWhyDrinkLi>{t('ensuringStability')}</WelcomeWhyDrinkLi>
            <WelcomeWhyDrinkLi>
              {t('maintainingNormalTemperature')}
            </WelcomeWhyDrinkLi>
            <WelcomeWhyDrinkLi>
              {t('maintainingImmuneSystem')}
            </WelcomeWhyDrinkLi>
          </WelcomeWhyDrinkUl>
        </WelcomeWhyDrinkDivCantainer>
      </WelcomeDivCantainer>
    </>
  );
};

export default Welcome;
