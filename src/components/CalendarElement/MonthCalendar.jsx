import { LiDayStyles, UlMonth } from './CalendarElement.styled';

const MonthCalendar = () => {
  let monthData = [
    { day: 1, percentage: 100 },
    { day: 2, percentage: 100 },
    { day: 3, percentage: 100 },
    { day: 4, percentage: 100 },
    { day: 5, percentage: 100 },
    { day: 6, percentage: 100 },
    { day: 7, percentage: 100 },
    { day: 8, percentage: 100 },
    { day: 9, percentage: 100 },
    { day: 10, percentage: 100 },
    { day: 11, percentage: 100 },
    { day: 12, percentage: 100 },
    { day: 13, percentage: 100 },
    { day: 14, percentage: 100 },
    { day: 15, percentage: 100 },
    { day: 16, percentage: 100 },
    { day: 17, percentage: 100 },
    { day: 18, percentage: 100 },
    { day: 19, percentage: 100 },
    { day: 20, percentage: 100 },
    { day: 21, percentage: 100 },
    { day: 22, percentage: 100 },
    { day: 23, percentage: 100 },
    { day: 24, percentage: 100 },
    { day: 25, percentage: 100 },
    { day: 26, percentage: 100 },
    { day: 27, percentage: 100 },
    { day: 28, percentage: 100 },
    { day: 29, percentage: 100 },
    { day: 30, percentage: 100 },
    { day: 31, percentage: 100 },
  ];
  return (
    <UlMonth>
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
