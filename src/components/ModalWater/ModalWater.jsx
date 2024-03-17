import SvgCross from '../../images/svg/svgModal/SvgCross.jsx';
import { useDispatch, useSelector } from 'react-redux';
import {
  modalIsAdd,
  modalIsEdit,
  modalIsOpen,
} from '../../store/water/selectors.js';
import { changeModalClose } from '../../store/water/waterSlice.js';
import { useEffect } from 'react';
import ModalAddWater from '../ModalAddWater/ModalAddWater.jsx';
import {
  StyledModalAddBackdrop,
  StyledModalAddClose,
  StyledModalAddWrapper,
} from '../ModalAddWater/ModalAddWater.styled.js';
import ModalEditWater from '../ModalEditWater/ModalEditWater.jsx';

const ModalWater = () => {
  const isModalOpen = useSelector(modalIsOpen);
  const isModalAdd = useSelector(modalIsAdd);
  const isModalEdit = useSelector(modalIsEdit);

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

  return (
    isModalOpen && (
      <StyledModalAddBackdrop open={isModalOpen} onClick={clickBackdrop}>
        <StyledModalAddWrapper>
          {isModalAdd && <h2>Add water</h2>}
          {isModalEdit && <h2>Edit the entered amount of water</h2>}

          <StyledModalAddClose
            onClick={() => {
              dispatch(changeModalClose(false));
            }}
          >
            <SvgCross />
          </StyledModalAddClose>

          {isModalEdit && <ModalEditWater />}
          {isModalAdd && <ModalAddWater />}
        </StyledModalAddWrapper>
      </StyledModalAddBackdrop>
    )
  );
};

export default ModalWater;
