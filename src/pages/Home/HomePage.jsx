import DailyNorma from '../../components/DailyNorma/DailyNorma';

import WaterCalendar from '../../components/WaterCalendar/WaterCalendar';
import { HomeContauner } from './HomePageStyled';

const HomePage = () => {
  return (
    <>
      {/* <DivImgContainer /> */}
      <HomeContauner>
        <DailyNorma />
        <WaterCalendar />
      </HomeContauner>
    </>
  );
};

export default HomePage;
