import { useState } from 'react';
import DaysGeneralStats from '../DaysGeneralStats/DaysGeneralStats';
import { LiDayStyles, UlMonth } from './CalendarElement.styled';

const MonthCalendar = ({ monthData }) => {
  const [showDaysStats, setDaysStats] = useState(false);

  return (
    <UlMonth>
      {showDaysStats && <DaysGeneralStats />}
      {monthData?.map((item) => (
        <LiDayStyles key={item.day} onClick={() => setDaysStats(true)}>
          <span className="day">{item.day}</span>
          <span className="percentage">{item.percentage}%</span>
        </LiDayStyles>
      ))}
    </UlMonth>
  );
};

export default MonthCalendar;
