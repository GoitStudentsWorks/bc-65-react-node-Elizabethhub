import DailyNorma from '../../components/DailyNorma/DailyNorma';

import WaterCalendar from '../../components/WaterCalendar/WaterCalendar';
import { HomeContainer } from './HomePage.styled';

const HomePage = () => {
  return (
    <>
      {/* <DivImgContainer /> */}
      <HomeContainer>
        <DailyNorma />
        <WaterCalendar />
      </HomeContainer>
    </>
  );
};

export default HomePage;
