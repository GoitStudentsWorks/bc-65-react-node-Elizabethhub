import { useState } from 'react';
import ModalAddWoter from '../ModalAddWoter/ModalAddWoter';
const TodayElement = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <button onClick={openModal}>Open ModalAddWoter</button>
      {isModalOpen && <ModalAddWoter onClose={closeModal} />}
    </>
  );
};

export default TodayElement;
