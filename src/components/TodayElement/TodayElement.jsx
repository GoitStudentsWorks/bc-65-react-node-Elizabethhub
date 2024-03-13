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
import EditSvg from '../../images/EditSvg';
import DeleteSvg from '../../images/DeleteSvg';
import SvgGlass from '../../images/GlassSvg';
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
      <ListWrapper>
        <h2>Today</h2>
        <StyledList>
          <ListItem>
            <InfoWrapper>
              <SvgGlass />
              <Amount>250 ml</Amount>
              <Time>11:00</Time>
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
          {/*  */}
          <ListItem>
            <InfoWrapper>
              <SvgGlass />
              <Amount>250 ml</Amount>
              <Time>11:00</Time>
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
          <ListItem>
            <InfoWrapper>
              <SvgGlass />
              <Amount>250 ml</Amount>
              <Time>11:00</Time>
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
          <ListItem>
            <InfoWrapper>
              <SvgGlass />
              <Amount>250 ml</Amount>
              <Time>11:00</Time>
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

          {/* / */}
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
