import { useState } from 'react';
import {
  ContentWrapperCalendar,
  HeadingWrapper,
  MonthSwitcher,
  DayStyles,
  MonthHeading,
  MonthList,
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

  const isToday = (day) => {
    const today = new Date();
    return (
      day === today.getDate() &&
      currentDate.getMonth() === today.getMonth() &&
      currentDate.getFullYear() === today.getFullYear()
    );
  };

  function closeDayStat(event) {
    const element = event.target;
    const parent = element.parentNode;

    if (parent.classList.contains('li-day')) {
      dispatch(changeShowDaysStats(true));
    } else {
      dispatch(changeShowDaysStats(false));
    }
  }

  const rootElement = document.getElementById('root');
  rootElement.addEventListener('click', (event) => {
    closeDayStat(event);
  });

  return (
    <ContentWrapperCalendar>
      <HeadingWrapper>
        <MonthHeading>Month</MonthHeading>
        <MonthSwitcher>
          <button
            className="arrow"
            onClick={() => changeMonth('back')}
            type="button"
          >
            <ArrowLeftCalendarSvg />
          </button>
          <p className="month__name">
            {currentDate.toLocaleString('en-us', { month: 'long' })},&nbsp;
            {currentDate.getFullYear()}
          </p>
          <button
            className="arrow"
            onClick={() => changeMonth('forward')}
            type="button"
          >
            <ArrowRightCalendarSvg />
          </button>
        </MonthSwitcher>
      </HeadingWrapper>

      <MonthList>
        {showDaysStats && (
          <DaysGeneralStats monthData={monthData} currentDate={currentDate} />
        )}
        {monthData.map((item) => (
          <DayStyles
            key={item.day}
            className={`li-day ${isToday(item.day) ? 'today' : ''}`}
          >
            <span className="day">{item.day}</span>
            <span className="percentage">{item.percentage}%</span>
          </DayStyles>
        ))}
      </MonthList>
    </ContentWrapperCalendar>
  );
};

export default CalendarElement;
