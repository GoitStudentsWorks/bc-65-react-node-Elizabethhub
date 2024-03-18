import { useDispatch, useSelector } from 'react-redux';
import { isModalDayNorm, dayNorma } from '../../store/water/selectors';
import { changeModalDailyNorma } from '../../store/water/waterSlice';
import ModalDailyNorma from '../ModalDailyNorma/ModalDailyNorma';
import {
  DailyEditButton,
  DailyLiter,
  DailyTittle,
  DailyWrapper,
  DailyWrapperEdit,
} from './DailyEdit.styled';

const DailyEdit = () => {
  const isModalOpen = useSelector(isModalDayNorm);
  const dayNormaValue = useSelector(dayNorma);
  const dispatch = useDispatch();

  return (
    <DailyWrapper>
      {isModalOpen && <ModalDailyNorma />}
      <DailyTittle>My daily norma</DailyTittle>
      <DailyWrapperEdit>
        <DailyLiter>{dayNormaValue} L</DailyLiter>
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
