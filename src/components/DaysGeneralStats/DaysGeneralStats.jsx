import { DayStatsContainer, UpperElem } from './DaysGeneralStats.styled';

const DaysGeneralStats = ({ monthData, currentDate }) => {
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
        Daily norma : <span>1,5 L</span>
      </p>
      <p>
        Fulfillment of the daily norm : <span>100%</span>
      </p>
      <p>
        How many servings of water : <span>6</span>
      </p>
    </DayStatsContainer>
  );
};

export default DaysGeneralStats;
