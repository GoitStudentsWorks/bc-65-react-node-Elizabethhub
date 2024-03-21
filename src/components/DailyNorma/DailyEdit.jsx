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
import { useTranslation } from 'react-i18next';

const DailyEdit = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const isModalOpen = useSelector(isModalDayNorm);
  const userObject = useSelector(selectUser);
  const dayNormaValue = userObject?.dailyNorma;

  return (
    <DailyWrapper>
      {isModalOpen && <ModalDailyNorma />}
      <DailyTittle>{t('mydailynorma')}</DailyTittle>
      <DailyWrapperEdit>
        <DailyLiter>{(dayNormaValue / 1000).toFixed(1)} L</DailyLiter>
        <DailyEditButton
          type="button"
          onClick={() => {
            dispatch(changeModalDailyNorma(true));
          }}
        >
          {t('edit')}
        </DailyEditButton>
      </DailyWrapperEdit>
    </DailyWrapper>
  );
};

export default DailyEdit;
