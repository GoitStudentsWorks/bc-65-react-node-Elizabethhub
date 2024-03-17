import SvgCross from '../../images/svg/svgModal/SvgCross.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { modalDeleteOpen } from '../../store/water/selectors.js';
import { changeModalClose } from '../../store/water/waterSlice.js';
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

const ModalDeleteWater = () => {
  const isModalOpen = useSelector(modalDeleteOpen);

  const dispatch = useDispatch();

  const clickBackdrop = (e) => {
    if (e.target === e.currentTarget) {
      dispatch(changeModalClose(false));
    }
  };
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        dispatch(changeModalClose(false));
      }
    };
    document.addEventListener('keydown', handleKeyDown);

    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [dispatch]);

  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    isModalOpen && (
      <StyledModalDeleteBackdrop open={isModalOpen} onClick={clickBackdrop}>
        <StyledModalDeleteWrapper>
          <h2>Delete entry</h2>

          <StyledModalDeleteClose
            onClick={() => {
              dispatch(changeModalClose(false));
            }}
          >
            <SvgCross />
          </StyledModalDeleteClose>

          <StyledModalDeleteForm onSubmit={onSubmit}>
            <p>Are you sure you want to delete the entry?</p>
            <StyledModalDeleteButtons>
              <StyledModalDeleteBtn type="submit">Delete</StyledModalDeleteBtn>
              <StyledModalCancelBtn
                onClick={() => {
                  dispatch(changeModalClose(false));
                }}
              >
                Cancel
              </StyledModalCancelBtn>
            </StyledModalDeleteButtons>
          </StyledModalDeleteForm>
        </StyledModalDeleteWrapper>
      </StyledModalDeleteBackdrop>
    )
  );
};

export default ModalDeleteWater;
