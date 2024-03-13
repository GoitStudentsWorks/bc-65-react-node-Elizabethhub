import { useState } from 'react';
import ModalAddWoter from '../ModalAddWoter/ModalAddWoter';
import {
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

        <button onClick={openModal}>Open ModalAddWoter</button>
        {isModalOpen && <ModalAddWoter onClose={closeModal} />}
      </ListWrapper>
    </>
  );
};

export default TodayElement;
