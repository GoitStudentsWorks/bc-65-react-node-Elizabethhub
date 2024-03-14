import { DivContentWrapper } from './CalendarElement.styled';
import MonthCalendar from './MonthCalendar';
import MonthHeader from './MothHeader';

const CalendarElement = () => {
  return (
    <DivContentWrapper>
      <MonthHeader />
      <MonthCalendar />
    </DivContentWrapper>
  );
};

export default CalendarElement;
