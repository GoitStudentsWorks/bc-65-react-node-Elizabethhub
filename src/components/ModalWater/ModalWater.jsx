import SvgCross from '../../images/svg/svgModal/SvgCross.jsx';
import { useDispatch, useSelector } from 'react-redux';
import {
  modalIsAdd,
  modalIsEdit,
  modalIsOpen,
  selectorWaterToday,
  modalId,
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
import useClickBackdrop from '../../hooks/modalCloseBackdrop.js';
import useKeyDown from '../../hooks/modalCloseEsc.js';

const ModalWater = () => {
  const isModalOpen = useSelector(modalIsOpen);
  const isModalAdd = useSelector(modalIsAdd);
  const isModalEdit = useSelector(modalIsEdit);
  const waterTodayList = useSelector(selectorWaterToday);
  const id = useSelector(modalId);

  const dispatch = useDispatch();

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

          {isModalEdit && (
            <ModalEditWater
              waterItem={waterTodayList.find((item) => item._id === id)}
            />
          )}
          {isModalAdd && <ModalAddWater />}
        </StyledModalAddWrapper>
      </StyledModalAddBackdrop>
    )
  );
};

export default ModalWater;
