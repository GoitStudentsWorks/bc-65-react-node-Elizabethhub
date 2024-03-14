import DailyEdit from './DailyEdit';
import WaterRatio from './WaterRatio';
import bottleMobile from '../../images/dailyBottle/bottleMobile.png';

const DailyNorma = () => {

  return (
    <>
      <div>
        <DailyEdit />
        <img src={bottleMobile} alt="bottle-background" />
        <WaterRatio />
      </div>
      
    </>
  );
};

export default DailyNorma;
