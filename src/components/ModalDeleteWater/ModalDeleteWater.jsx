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
import useClickBackdrop from '../../hooks/modalCloseBackdrop.js';
import useKeyDown from '../../hooks/modalCloseEsc.js';
// import { deleteWaterThunk } from '../../store/water/operations.js';
// import { toast } from 'react-toastify';

const ModalDeleteWater = () => {
  const isModalOpen = useSelector(modalDeleteOpen);
  // const [time, setTime] = useState(new Date());

  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();

    // const response = api.get('getUserId');
    // const id = response.data.id;

    // const water = {
    //   _id: crypto.randomUUID(),
    //   milliliters: e.target.elements.value,
    //   time,
    // };
    // dispatch(deleteWaterThunk( water ))
    //   .unwrap()
    //   .then(() => {
    //     dispatch(changeTodayList({ ...water, _id: crypto.randomUUID() }));
    //     toast.success('Water note was successfully deleted');
    //   })
    //   .catch((error) => {
    //     toast.error(error);
    //   });
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
