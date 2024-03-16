import { useState } from 'react';
import { HeaderButton } from './Header.styled';
import HeaderSVGPhoto from '../../images/svg/svgheader/HeaderSVGPhoto';
import HeaderButtonSVG from '../../images/svg/svgheader/HeaderButtonSVG';

import {
  Backdrop,
  ButtonLogOut,
  DivButtonLogOut,
  DivHeaderModalContainer,
  DivTest,
  HeaderModalButton,
  HeaderModalButtonSpan,
  HeaderModalContainer,
  HeaderModalLogOutContainer,
  SpanLogOut,
  SpanLogOutQuestion,
} from './HeaderModalStyled';
import SettingModal from '../SettingModal/SettingModal';
import SettingSVG from '../../images/svg/svgheader/SettingSVG';
import ClouseSVG from '../../images/svg/svgheader/ClouseSVG';
import HeaderButtonRotateSVG from '../../images/svg/svgheader/HeaderButtonRotateSVG';

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
    setIsHeaderModalOpen(false);
    setIsBackdropVisible(false);
  };

  return (
    <>
      {isModalOpen && (
        <div>
          <Backdrop $visible={isBackdropVisible} />

          <SettingModal onClose={closeModal} />
        </div>
      )}
      <HeaderButton onClick={toggleHeaderModal}>
        <HeaderSVGPhoto />
        {isHeaderModalOpen ? <HeaderButtonRotateSVG /> : <HeaderButtonSVG />}
      </HeaderButton>
      <DivHeaderModalContainer>
        <HeaderModalContainer $visible={isHeaderModalOpen}>
          <HeaderModalButton onClick={openModal}>
            <SettingSVG />
            <HeaderModalButtonSpan>Setting</HeaderModalButtonSpan>
          </HeaderModalButton>
          <HeaderModalButton onClick={LogOutHeaderModal}>
            <ClouseSVG />
            <HeaderModalButtonSpan>Log out</HeaderModalButtonSpan>
          </HeaderModalButton>
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
