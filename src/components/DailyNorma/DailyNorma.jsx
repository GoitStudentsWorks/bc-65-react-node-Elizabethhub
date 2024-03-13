import { useState } from 'react';
import ModalDailyNorma from '../ModalDailyNorma/ModalDailyNorma';
import ModalAddWater from '../ModalAddWater/ModalAddWater';

const DailyNorma = () => {
  const [modalType, setModalType] = useState(null);

  const openModal = (type) => {
    setModalType(type);
  };

  const closeModal = () => {
    setModalType(null);
  };

  return (
    <>
      <h1>Ліва сторона</h1>
      <div>
        <button onClick={() => openModal('dailyNorma')}>ModalDailyNorma</button>
        {modalType === 'dailyNorma' && <ModalDailyNorma onClose={closeModal} />}
      </div>
      <div>
        <button onClick={() => openModal('addWater')}>ModalAddWater</button>
        {modalType === 'addWater' && <ModalAddWater onClose={closeModal} />}
      </div>
    </>
  );
};

export default DailyNorma;
