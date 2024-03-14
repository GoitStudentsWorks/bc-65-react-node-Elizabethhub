import { useState } from 'react';
import ModalDailyNorma from '../ModalDailyNorma/ModalDailyNorma';
import ModalAddWater from '../ModalAddWater/ModalAddWater';
import DailyEdit from './DailyEdit';
import WaterRatio from './WaterRatio';
import bottleMobile from '../../images/dailyBottle/bottleMobile.png';
import botleMain from '../../images/dailyBottle/botleMain.png';
import { BottleImage, Wrp } from './WaterRatio.styled';

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
      <Wrp>
        <DailyEdit openModal={openModal} />
        <BottleImage src={bottleMobile} alt="bottle-background" />
        <WaterRatio openModal={openModal} />
      </Wrp>
      {/* <div>
        <button onClick={() => openModal('dailyNorma')}>ModalDailyNorma</button>
        {modalType === 'dailyNorma' && <ModalDailyNorma onClose={closeModal} />}
      </div>
      <div>
        <button onClick={() => openModal('addWater')}>ModalAddWoter</button>
        {modalType === 'addWater' && <ModalAddWoter onClose={closeModal} />}
      </div> */}
    </>
  );
};

export default DailyNorma;
