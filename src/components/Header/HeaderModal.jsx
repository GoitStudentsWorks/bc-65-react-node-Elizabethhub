import { useState } from 'react';
import { HeaderButton } from './HeaderStyled';
import HeaderSVGPhoto from '../../images/svg/svgheader/HeaderSVGPhoto';
import HeaderButtonSVG from '../../images/svg/svgheader/HeaderButtonSVG';
import ProfileSettings from '../ProfileІSettings/ProfileSettings';
import {
  Backdrop,
  ButtonLogOut,
  DivButtonLogOut,
  DivHeaderModalContainer,
  DivTest,
  HeaderModalContainer,
  HeaderModalLogOutContainer,
  SpanLogOut,
  SpanLogOutQuestion,
} from './HeaderModalStyled';

const HeaderModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isHeaderModalOpen, setIsHeaderModalOpen] = useState(false);
  const [isHeaderModalLogOut, setIsHeaderModalLogOut] = useState(false);
  const [isBackdropVisible, setIsBackdropVisible] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const toggleHeaderModal = () => {
    setIsHeaderModalOpen((prevState) => !prevState);
    setIsBackdropVisible((prevState) => !prevState);

    console.log();
  };

  const LogOutHeaderModal = () => {
    setIsHeaderModalLogOut((prevState) => !prevState);

    setIsBackdropVisible(false);
  };

  return (
    <>
      {isModalOpen && (
        <div>
          <Backdrop $visible={isBackdropVisible} />

          <ProfileSettings onClose={closeModal} />
        </div>
      )}
      <HeaderButton onClick={toggleHeaderModal}>
        <HeaderSVGPhoto />
        <HeaderButtonSVG />
      </HeaderButton>
      <DivHeaderModalContainer>
        <HeaderModalContainer $visible={isHeaderModalOpen}>
          <button onClick={openModal}>Setting</button>
          <button onClick={LogOutHeaderModal}>Close</button>
        </HeaderModalContainer>
      </DivHeaderModalContainer>
      {isHeaderModalLogOut && (
        <DivTest>
          <Backdrop onClick={LogOutHeaderModal} $visible={isBackdropVisible} />
          <HeaderModalLogOutContainer $visible={isHeaderModalLogOut}>
            <SpanLogOut>Log out</SpanLogOut>
            <SpanLogOutQuestion>
              Do you really want to leave?
            </SpanLogOutQuestion>
            <DivButtonLogOut>
              <ButtonLogOut onClick={LogOutHeaderModal}>Cancel</ButtonLogOut>
              <ButtonLogOut>Log out</ButtonLogOut>
            </DivButtonLogOut>
          </HeaderModalLogOutContainer>
        </DivTest>
      )}
    </>
  );
};

export default HeaderModal;
