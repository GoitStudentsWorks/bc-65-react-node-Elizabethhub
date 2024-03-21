import { useDispatch } from 'react-redux';
import { changeModalClose } from '../store/water/waterSlice.js';

const useClickBackdrop = () => {
  const dispatch = useDispatch();

  const clickBackdrop = (e) => {
    if (e.target === e.currentTarget) {
      dispatch(changeModalClose(false));
    }
  };

  return clickBackdrop;
};

export default useClickBackdrop;
