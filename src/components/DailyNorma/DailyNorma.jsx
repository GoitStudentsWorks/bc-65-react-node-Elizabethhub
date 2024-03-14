import DailyEdit from './DailyEdit';
import WaterRatio from './WaterRatio';
import bottleMobile from '../../images/dailyBottle/bottleMobile.png';
import botleMain from '../../images/dailyBottle/BotleMain.png';
import { BottleImage, Wrp } from './WaterRatio.styled';

const DailyNorma = () => {
  return (
    <>
      <Wrp>
        <DailyEdit />
        <img src={bottleMobile} alt="bottle-background" />
        <WaterRatio />
      </Wrp>
    </>
  );
};

export default DailyNorma;
