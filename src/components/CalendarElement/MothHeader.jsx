// const months = [
//     "January",
//     "February",
//     "March",
//     "April",
//     "May",
//     "June",
//     "July",
//     "August",
//     "September",
//     "October",
//     "November",
//     "December",
//   ];

// const getMonthName = (index) => {
//   return months[index - 1];
// };
// { changeDirection, month, year }

import ArrowLeftCalendarSvg from '../../images/svg/svgCalendar/ArrowLeftCalendarSvg';
import ArrowRightCalendarSvg from '../../images/svg/svgCalendar/ArrowRightCalendarSvg';
import {
  DivHeadingWrapper,
  DivMonthSwitcher,
  MonthHeading,
} from './CalendarElement.styled';

const MonthHeader = () => {
  function changeDirection(comand) {
    console.log(comand);
  }

  return (
    <DivHeadingWrapper>
      <MonthHeading>Month</MonthHeading>
      <DivMonthSwitcher>
        <button
          className="arrow"
          onClick={() => changeDirection('back')}
          type="button"
        >
          <ArrowLeftCalendarSvg />
        </button>
        <p className="month__name">March, 2024</p>
        <button
          className="arrow"
          onClick={() => changeDirection('forward')}
          type="button"
        >
          <ArrowRightCalendarSvg />
        </button>
      </DivMonthSwitcher>
    </DivHeadingWrapper>
  );
};

export default MonthHeader;
