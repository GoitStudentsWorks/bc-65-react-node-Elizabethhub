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
  selectorWaterInfo,
  showDaysGenStats,
} from '../../store/water/selectors.js';
import { changeShowDaysStats } from '../../store/water/waterSlice';
import { useTranslation } from 'react-i18next';
import { fetchMonthWaterThunk } from '../../store/water/operations.js';
import { selectUser } from '../../store/auth/selectors.js';

const CalendarElement = () => {
  const { t } = useTranslation();
  const showDaysStats = useSelector(showDaysGenStats);
  const monthWaterData = useSelector(selectMonthWaterData);
  const dispatch = useDispatch();
  const [currentDate, setCurrentDate] = useState(new Date());
  const [chosenDay, setChosenDay] = useState(0);
  const hero = useSelector(selectUser);
  const percentageToday = useSelector(selectorWaterInfo);
  const thisToday = new Date();

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

  const spans = document.querySelectorAll('li > .day');

  for (const span of spans) {
    span.addEventListener('click', function () {
      const value = this.textContent;
      setChosenDay(Number(value));
    });
  }

  useEffect(() => {
    const date = new Date();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    if (hero) {
      dispatch(fetchMonthWaterThunk({ year, month }));
    }
  }, [dispatch, hero]);

  const [month, setMonth] = useState(new Date().getMonth() + 1);
  const [year, setYear] = useState(new Date().getFullYear());

  useEffect(() => {
    if (hero) {
      dispatch(fetchMonthWaterThunk({ year, month }));
    }
  }, [dispatch, hero, month, year]);

  function changeMonthQuery(direction) {
    changeMonth(direction);

    if (direction === 'forward') {
      if (month >= 12) {
        setMonth(1);
        setYear(year + 1);
      } else {
        setMonth(month + 1);
      }
    } else {
      if (month <= 1) {
        setMonth(12);
        setYear(year - 1);
      } else {
        setMonth(month - 1);
      }
    }
  }

  function correctPercentage(percentage) {
    return percentage >= 100 ? 100 : percentage || 0;
  }

  return (
    <>
      {monthWaterData && (
        <ContentWrapperCalendar>
          <HeadingWrapper>
            <MonthHeading>{t('month')}</MonthHeading>
            <MonthSwitcher>
              <button
                className="arrow"
                aria-label="Show prev month"
                onClick={() => changeMonthQuery('back')}
                type="button"
              >
                <ArrowLeftCalendarSvg />
              </button>
              <p className="month__name">
                {t(currentDate.toLocaleString('en-us', { month: 'long' }))}
                ,&nbsp;
                {currentDate.getFullYear()}
              </p>
              <button
                className="arrow"
                aria-label="Show next month"
                onClick={() => changeMonthQuery('forward')}
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
                    $percentageToday={percentageToday}
                    className={`li-day ${isToday(item.day) ? 'today' : ''}`}
                  >
                    <span className="day">{item.day}</span>
                    <span className="percentage">
                      {thisToday.getDate() === item.day &&
                      thisToday.getMonth() + 1 === month
                        ? correctPercentage(percentageToday)
                        : correctPercentage(item?.waterVolPercentage) || 0}
                      %
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
      )}
    </>
  );
};

export default CalendarElement;
