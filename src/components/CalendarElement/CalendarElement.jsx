import { useState } from 'react';
import {
  DivContentWrapper,
  DivHeadingWrapper,
  DivMonthSwitcher,
  LiDayStyles,
  MonthHeading,
  UlMonth,
} from './CalendarElement.styled';
import ArrowLeftCalendarSvg from '../../images/svg/svgCalendar/ArrowLeftCalendarSvg';
import ArrowRightCalendarSvg from '../../images/svg/svgCalendar/ArrowRightCalendarSvg';
import DaysGeneralStats from '../DaysGeneralStats/DaysGeneralStats';
import { useDispatch, useSelector } from 'react-redux';
import { showDaysGenStats } from '../../store/water/selectors';
import { changeShowDaysStats } from '../../store/water/waterSlice';

const CalendarElement = () => {
  const showDaysStats = useSelector(showDaysGenStats);
  const dispatch = useDispatch();
  const [currentDate, setCurrentDate] = useState(new Date());

  const changeMonth = (direction) => {
    setCurrentDate((prevDate) => {
      const newDate = new Date(prevDate);
      if (direction === 'back') {
        newDate.setMonth(prevDate.getMonth() - 1);
      } else {
        newDate.setMonth(prevDate.getMonth() + 1);
      }
      return newDate;
    });
  };

  const daysInMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth() + 1,
    0
  ).getDate();

  const monthData = [];
  for (let day = 1; day <= daysInMonth; day++) {
    monthData.push({ day, percentage: 100 });
  }

  return (
    <DivContentWrapper>
      <DivHeadingWrapper>
        <MonthHeading>Month</MonthHeading>
        <DivMonthSwitcher>
          <button
            className="arrow"
            onClick={() => changeMonth('back')}
            type="button"
          >
            <ArrowLeftCalendarSvg />
          </button>
          <p className="month__name">
            {currentDate.toLocaleString('en-us', { month: 'long' })}&nbsp;
            {currentDate.getFullYear()}
          </p>
          <button
            className="arrow"
            onClick={() => changeMonth('forward')}
            type="button"
          >
            <ArrowRightCalendarSvg />
          </button>
        </DivMonthSwitcher>
      </DivHeadingWrapper>

      <UlMonth>
        {showDaysStats && <DaysGeneralStats />}
        {monthData.map((item) => (
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
    </DivContentWrapper>
  );
};

export default CalendarElement;
