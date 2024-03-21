import { useDispatch, useSelector } from 'react-redux';
import { isModalDayNorm } from '../../store/water/selectors';
import { changeModalDailyNorma } from '../../store/water/waterSlice';
import ModalDailyNorma from '../ModalDailyNorma/ModalDailyNorma';
import {
  DailyEditButton,
  DailyLiter,
  DailyTittle,
  DailyWrapper,
  DailyWrapperEdit,
} from './DailyEdit.styled';
import { selectUser } from '../../store/auth/selectors';

const DailyEdit = () => {
  const dispatch = useDispatch();
  const isModalOpen = useSelector(isModalDayNorm);
  const userObject = useSelector(selectUser);
  const dayNormaValue = userObject?.dailyNorma;

  return (
    <DailyWrapper>
      {isModalOpen && <ModalDailyNorma />}
      <DailyTittle>My daily norma</DailyTittle>
      <DailyWrapperEdit>
        <DailyLiter>{(dayNormaValue / 1000).toFixed(1)} L</DailyLiter>
        <DailyEditButton
          type="button"
          onClick={() => {
            dispatch(changeModalDailyNorma(true));
          }}
        >
          Edit
        </DailyEditButton>
      </DailyWrapperEdit>
    </DailyWrapper>
  );
};

export default DailyEdit;
