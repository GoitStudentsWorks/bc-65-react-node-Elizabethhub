import DaysGeneralStats from '../DaysGeneralStats/DaysGeneralStats';
import { LiDayStyles, UlMonth } from './CalendarElement.styled';

const MonthCalendar = ({ monthData }) => {
  return (
    <UlMonth>
      <DaysGeneralStats />
      {monthData?.map((item) => (
        <LiDayStyles key={item.day}>
          <span className="day">{item.day}</span>
          <span className="percentage">{item.percentage}%</span>
        </LiDayStyles>
      ))}
    </UlMonth>
  );
};

export default MonthCalendar;
