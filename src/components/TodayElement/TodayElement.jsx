import { useState } from 'react';
import ModalAddWater from '../ModalAddWater/ModalAddWater';
import {
  AddBtnWrapper,
  Amount,
  BtnWrapper,
  InfoWrapper,
  ListItem,
  ListWrapper,
  StyledList,
  Time,
} from './TodayElement.styled';
import EditSvg from '../../images/svg/svgToday/EditSvg';
import DeleteSvg from '../../images/svg/svgToday/DeleteSvg';
import SvgGlass from '../../images/svg/svgToday/GlassSvg';
const TodayElement = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  let waterArr = [
    { id: 1, amount: 250, hours: '11:00' },
    { id: 2, amount: 350, hours: '10:00' },
    { id: 3, amount: 200, hours: '11:00' },
    { id: 4, amount: 150, hours: '10:00' },
  ];

  return (
    <>
      <ListWrapper>
        <h2>Today</h2>
        <StyledList>
          {waterArr.map((item) => {
            return (
              <ListItem key={item.id}>
                <InfoWrapper>
                  <SvgGlass />
                  <Amount>{item.amount} ml</Amount>
                  <Time>{item.hours} PM</Time>
                </InfoWrapper>
                <BtnWrapper>
                  <div>
                    <EditSvg />
                  </div>
                  <div>
                    <DeleteSvg />
                  </div>
                </BtnWrapper>
              </ListItem>
            );
          })}
        </StyledList>

        <AddBtnWrapper>
          <button onClick={openModal}>
            <span>+</span>
            <span>Open </span>
          </button>
        </AddBtnWrapper>

        {isModalOpen && <ModalAddWater onClose={closeModal} />}
      </ListWrapper>
    </>
  );
};

export default TodayElement;
