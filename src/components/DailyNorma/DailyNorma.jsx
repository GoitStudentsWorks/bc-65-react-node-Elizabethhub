import { useMediaQuery } from 'react-responsive';
import DailyEdit from './DailyEdit';
import WaterRatio from './WaterRatio';

import { Wrp } from './WaterRatio.styled';
import BottleMobile from '../../images/svg/svgDailyNorma/BottleMobile';
import BottleTablet from '../../images/svg/svgDailyNorma/BottleTablet';
import BottleDesctop from '../../images/svg/svgDailyNorma/BottleDesctop';

const DailyNorma = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1279 });
  const isDesktop = useMediaQuery({ query: '(min-width: 1280px)' });
  return (
    <>
      <Wrp>
        <DailyEdit />
        {isMobile && <BottleMobile />}
        {isTablet && <BottleTablet />}
        {isDesktop && <BottleDesctop />}
        <WaterRatio />
      </Wrp>
    </>
  );
};

export default DailyNorma;
