import SvgCross from '../../images/svg/svgModal/SvgCross.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { modalDeleteOpen, modalId } from '../../store/water/selectors.js';
import { changeModalClose, deleteWater } from '../../store/water/waterSlice.js';
import { useEffect } from 'react';
import {
  StyledModalCancelBtn,
  StyledModalDeleteBackdrop,
  StyledModalDeleteBtn,
  StyledModalDeleteButtons,
  StyledModalDeleteClose,
  StyledModalDeleteForm,
  StyledModalDeleteWrapper,
} from './ModalDeleteWater.styled.js';
import useClickBackdrop from '../../hooks/modalCloseBackdrop.js';
import useKeyDown from '../../hooks/modalCloseEsc.js';
import { deleteWaterThunk } from '../../store/water/operations.js';
import { toast } from 'react-toastify';
import { useTranslation } from 'react-i18next';

const ModalDeleteWater = () => {
  const isModalOpen = useSelector(modalDeleteOpen);
  const id = useSelector(modalId);
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const onSubmit = (e) => {
    e.preventDefault();

    dispatch(deleteWaterThunk(id))
      .unwrap()
      .then(() => {
        dispatch(deleteWater(id));
        dispatch(changeModalClose(false));
        toast.success('Water note was successfully deleted');
      })
      .catch((error) => {
        toast.error(error);
      });
  };

  const clickBackdrop = useClickBackdrop();

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isModalOpen]);

  useKeyDown(() => {
    dispatch(changeModalClose(false));
  }, [dispatch, isModalOpen]);

  return (
    isModalOpen && (
      <StyledModalDeleteBackdrop open={isModalOpen} onClick={clickBackdrop}>
        <StyledModalDeleteWrapper>
          <h2>{t('deleteEntry')}</h2>

          <StyledModalDeleteClose
            onClick={() => {
              dispatch(changeModalClose(false));
            }}
          >
            <SvgCross />
          </StyledModalDeleteClose>

          <StyledModalDeleteForm onSubmit={onSubmit}>
            <p>{t('areYouSureYouWantToDeleteTheEntry')}</p>
            <StyledModalDeleteButtons>
              <StyledModalDeleteBtn type="submit">
                {t('delete')}
              </StyledModalDeleteBtn>
              <StyledModalCancelBtn
                onClick={() => {
                  dispatch(changeModalClose(false));
                }}
              >
                {t('cancel')}
              </StyledModalCancelBtn>
            </StyledModalDeleteButtons>
          </StyledModalDeleteForm>
        </StyledModalDeleteWrapper>
      </StyledModalDeleteBackdrop>
    )
  );
};

export default ModalDeleteWater;
