import { useTranslation } from 'react-i18next';
import { DayStatsContainer, UpperElem } from './DaysGeneralStats.styled';
import { useSelector } from 'react-redux';
import {
  selectorWaterInfo,
  selectorWaterToday,
} from '../../store/water/selectors';
import { selectDailyWater } from '../../store/auth/selectors';

const DaysGeneralStats = ({ monthData, currentDate, chosenDay }) => {
  const waterPercentageToday = useSelector(selectorWaterInfo);
  const waterTodayList = useSelector(selectorWaterToday);
  const dailyNorma = useSelector(selectDailyWater);

  const { t } = useTranslation();
  return (
    <DayStatsContainer $dayNumber={chosenDay}>
      <UpperElem>
        <p>
          <span>{chosenDay}, </span>
          <span>{currentDate.toLocaleString('en-us', { month: 'long' })}</span>
        </p>
      </UpperElem>
      <p>
        {t('dailyNorma')} : <span>{(dailyNorma / 1000).toFixed(1)} L</span>
      </p>
      <p>
        {t('fulfillmentOfTheDailyNorm')} :{' '}
        <span>{waterPercentageToday >= 100 ? 100 : waterPercentageToday}%</span>
      </p>
      <p>
        {t('howManyServingsOfWater')} : <span>{waterTodayList.length}</span>
      </p>
    </DayStatsContainer>
  );
};

export default DaysGeneralStats;
