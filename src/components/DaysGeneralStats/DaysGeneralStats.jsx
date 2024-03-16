import { useDispatch } from 'react-redux';
import SvgCross from '../../images/svg/svgModal/SvgCross';
import { changeShowDaysStats } from '../../store/water/waterSlice';
import { DayStatsContainer, UpperElem } from './DaysGeneralStats.styled';

const DaysGeneralStats = () => {
  // const showDaysStats = useSelector(showDaysGenStats);
  const dispatch = useDispatch();
  return (
    <DayStatsContainer>
      <UpperElem>
        <p>
          <span>5, </span>
          <span>Marth</span>
        </p>
        <SvgCross
          onClick={() => {
            dispatch(changeShowDaysStats(false));
          }}
          style={{ cursor: 'pointer', width: '16px', height: '16px' }}
        />
      </UpperElem>
      <p>
        Daily norma : <span>1,5 L</span>
      </p>
      <p>
        Fulfillment of the daily norm : <span>100%</span>
      </p>
      <p>
        How many servings of water : <span>6</span>
      </p>
    </DayStatsContainer>
  );
};

export default DaysGeneralStats;
