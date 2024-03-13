import DailyNorma from '../../components/DailyNorma/DailyNorma';
import { DivImgContainer } from '../../components/Layout/Layout.styled';
import WaterCalendar from '../../components/WaterCalendar/WaterCalendar';
import { HomeContauner } from './HomePageStyled';

const HomePage = () => {
  return (
    <>
      <DivImgContainer />
      <HomeContauner>
        <DailyNorma />
        <WaterCalendar />
      </HomeContauner>
    </>
  );
};

export default HomePage;
