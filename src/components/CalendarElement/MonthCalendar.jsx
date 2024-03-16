import { useDispatch, useSelector } from 'react-redux';
import DaysGeneralStats from '../DaysGeneralStats/DaysGeneralStats';
import { LiDayStyles, UlMonth } from './CalendarElement.styled';
import { showDaysGenStats } from '../../store/water/selectors.js';
import { changeShowDaysStats } from '../../store/water/waterSlice';

const MonthCalendar = ({ monthData }) => {
  const showDaysStats = useSelector(showDaysGenStats);
  const dispatch = useDispatch();

  return (
    <UlMonth>
      {showDaysStats && <DaysGeneralStats />}
      {monthData?.map((item) => (
        <LiDayStyles
          key={item.day}
          onClick={() => {
            dispatch(changeShowDaysStats(true));
          }}
        >
          <span className="day">{item.day}</span>
          <span className="percentage">{item.percentage}%</span>
        </LiDayStyles>
      ))}
    </UlMonth>
  );
};

export default MonthCalendar;
