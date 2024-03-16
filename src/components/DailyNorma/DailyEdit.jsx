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

const DailyEdit = () => {
  const isModalOpen = useSelector(isModalDayNorm);
  const dispatch = useDispatch();

  return (
    <DailyWrapper>
      {isModalOpen && <ModalDailyNorma />}
      <DailyTittle>My daily norma</DailyTittle>
      <DailyWrapperEdit>
        <DailyLiter>1.5 L</DailyLiter>
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
