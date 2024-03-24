import { useEffect, useState } from 'react';
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
import {
  selectMonthWaterData,
  selectorWaterToday,
  showDaysGenStats,
} from '../../store/water/selectors.js';
import {
  changeShowDaysStats,
  updateWaterPercentage,
} from '../../store/water/waterSlice';
import { selectDailyWater, selectUser } from '../../store/auth/selectors.js';
import { useTranslation } from 'react-i18next';
import { fetchMonthWaterThunk } from '../../store/water/operations.js';

const CalendarElement = () => {
  const { t } = useTranslation();
  const showDaysStats = useSelector(showDaysGenStats);
  const userDailyWater = useSelector(selectDailyWater);
  const waterTodayList = useSelector(selectorWaterToday);
  const monthWaterData = useSelector(selectMonthWaterData);
  const hero = useSelector(selectUser);
  const dispatch = useDispatch();
  const [currentDate, setCurrentDate] = useState(new Date());
  const [chosenDay, setChosenDay] = useState(0);

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
    if (!parent) {
      return;
    }
    if (parent.classList.contains('li-day')) {
      dispatch(changeShowDaysStats(true));
    } else {
      dispatch(changeShowDaysStats(false));
    }
  }

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        dispatch(changeShowDaysStats(false));
      }
    };
    document.addEventListener('keydown', handleKeyDown);

    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [dispatch]);

  const rootElement = document.getElementById('root');
  rootElement.addEventListener('click', (event) => {
    closeDayStat(event);
  });

  useEffect(() => {
    if (hero) {
      const totalDrinkToday = waterTodayList.reduce(
        (accumulator, currentValue) => {
          return Number(accumulator) + Number(currentValue.milliliters);
        },
        0
      );

      const percentage = Math.round((totalDrinkToday / userDailyWater) * 100);
      dispatch(updateWaterPercentage(percentage));
    }
  }, [dispatch, hero, userDailyWater, waterTodayList]);
  //
  const spans = document.querySelectorAll('li > .day');

  for (const span of spans) {
    span.addEventListener('click', function () {
      const value = this.textContent;
      setChosenDay(Number(value));
    });
  }
  //
  console.log(monthWaterData);
  useEffect(() => {
    const date = new Date();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();

    dispatch(fetchMonthWaterThunk({ year, month }));
  }, [dispatch]);

  return (
    <ContentWrapperCalendar>
      <HeadingWrapper>
        <MonthHeading>{t('month')}</MonthHeading>
        <MonthSwitcher>
          <button
            className="arrow"
            onClick={() => changeMonth('back')}
            type="button"
          >
            <ArrowLeftCalendarSvg />
          </button>
          <p className="month__name">
            {t(currentDate.toLocaleString('en-us', { month: 'long' }))},&nbsp;
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
        {monthWaterData?.map((item) => {
          return (
            <div key={item.day}>
              <DayStyles
                key={item.day}
                $percentage={item.waterVolPercentage}
                className={`li-day ${isToday(item.day) ? 'today' : ''}`}
              >
                <span className="day">{item.day}</span>
                <span className="percentage">
                  {item.waterVolPercentage || 0}%
                </span>
              </DayStyles>
              {showDaysStats && item.day === chosenDay && (
                <DaysGeneralStats
                  monthWaterData={monthWaterData}
                  currentDate={currentDate}
                  chosenDay={chosenDay}
                  key={`${item.day + 100} `}
                  item={item}
                />
              )}
            </div>
          );
        })}
      </MonthList>
    </ContentWrapperCalendar>
  );
};

export default CalendarElement;
