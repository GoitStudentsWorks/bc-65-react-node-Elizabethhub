import { DivContentWrapper } from './CalendarElement.styled';
import MonthCalendar from './MonthCalendar';
import MonthHeader from './MothHeader';

const CalendarElement = () => {
  const today = new Date();
  console.log(' today: ', today);
  const currentMonth = today.getMonth();
  console.log('currentMonth: ', currentMonth);
  const daysInMonth = new Date(
    today.getFullYear(),
    currentMonth + 1,
    0
  ).getDate();
  console.log('daysInMonth: ', daysInMonth);

  let monthData = [];
  for (let day = 1; day <= daysInMonth; day++) {
    monthData.push({ day, percentage: 100 });
  }

  return (
    <DivContentWrapper>
      <MonthHeader currentMonth={currentMonth} />
      <MonthCalendar monthData={monthData} />
    </DivContentWrapper>
  );
};

export default CalendarElement;
