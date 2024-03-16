import ArrowLeftCalendarSvg from '../../images/svg/svgCalendar/ArrowLeftCalendarSvg';
import ArrowRightCalendarSvg from '../../images/svg/svgCalendar/ArrowRightCalendarSvg';
import {
  DivHeadingWrapper,
  DivMonthSwitcher,
  MonthHeading,
} from './CalendarElement.styled';

const MonthHeader = () => {
  return (
    <DivHeadingWrapper>
      <MonthHeading>Month</MonthHeading>
      <DivMonthSwitcher>
        <button className="arrow" type="button">
          <ArrowLeftCalendarSvg />
        </button>
        <p className="month__name">March, 2024</p>
        <button className="arrow" type="button">
          <ArrowRightCalendarSvg />
        </button>
      </DivMonthSwitcher>
    </DivHeadingWrapper>
  );
};

export default MonthHeader;
