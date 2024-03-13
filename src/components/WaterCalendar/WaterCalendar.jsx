import CalendarElement from '../CalendarElement/CalendarElement';
import TodayElement from '../TodayElement/TodayElement';
import { SectionTodayAndCalendar } from './WaterCalendar.styled';

const WaterCalendar = () => {
  return (
    <>
      <SectionTodayAndCalendar>
        <TodayElement />
        <CalendarElement />
      </SectionTodayAndCalendar>
    </>
  );
};

export default WaterCalendar;
