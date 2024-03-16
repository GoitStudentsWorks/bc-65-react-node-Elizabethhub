import { LiDayStyles, UlMonth } from './CalendarElement.styled';

const MonthCalendar = ({ monthData }) => {
  // const today = new Date();
  // console.log(' today: ', today);
  // const currentMonth = today.getMonth();
  // console.log('currentMonth: ', currentMonth);
  // const daysInMonth = new Date(
  //   today.getFullYear(),
  //   currentMonth + 1,
  //   0
  // ).getDate();
  // console.log('daysInMonth: ', daysInMonth);

  // let monthData = [];
  // for (let day = 1; day <= daysInMonth; day++) {
  //   monthData.push({ day, percentage: 100 });
  // }

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
