import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { changeModalClose } from '../store/water/waterSlice';

const useKeyDown = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        dispatch(changeModalClose(false));
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  });
};

export default useKeyDown;
