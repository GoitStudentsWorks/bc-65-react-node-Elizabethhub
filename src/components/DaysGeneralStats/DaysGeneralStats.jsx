import { DayStatsContainer, UpperElem } from './DaysGeneralStats.styled';

const DaysGeneralStats = () => {
  return (
    <DayStatsContainer>
      <UpperElem>
        <p>
          <span>5, </span>
          <span>Marth</span>
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
