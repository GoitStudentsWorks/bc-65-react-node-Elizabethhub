import { useTranslation } from 'react-i18next';
import { DayStatsContainer, UpperElem } from './DaysGeneralStats.styled';

const DaysGeneralStats = ({ monthData, currentDate }) => {
  const { t } = useTranslation();
  console.log('monthData: ', monthData);

  return (
    <DayStatsContainer>
      <UpperElem>
        <p>
          <span>5, </span>
          <span>{currentDate.toLocaleString('en-us', { month: 'long' })}</span>
        </p>
      </UpperElem>
      <p>
        {t('dailyNorma')} : <span>1,5 L</span>
      </p>
      <p>
        {t('fulfillmentOfTheDailyNorm')} : <span>100%</span>
      </p>
      <p>
        {t('howManyServingsOfWater')} : <span>6</span>
      </p>
    </DayStatsContainer>
  );
};

export default DaysGeneralStats;
