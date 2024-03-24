import { useTranslation } from 'react-i18next';
import { DayStatsContainer, UpperElem } from './DaysGeneralStats.styled';
import { useSelector } from 'react-redux';
import {
  selectorWaterInfo,
  selectorWaterToday,
} from '../../store/water/selectors';
import { selectDailyWater } from '../../store/auth/selectors';

const DaysGeneralStats = ({ monthWaterData, currentDate, chosenDay, item }) => {
  console.log('item: ', item);
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
        <span>
          {item?.waterVolPercentage >= 100
            ? 100
            : item?.waterVolPercentage || 0}
          %
        </span>
      </p>
      <p>
        {t('howManyServingsOfWater')} : <span>{item?.waterPortions || 0}</span>
      </p>
    </DayStatsContainer>
  );
};

export default DaysGeneralStats;
