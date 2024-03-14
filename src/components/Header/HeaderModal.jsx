import { useState } from 'react';
import { HeaderButton } from './HeaderStyled';
import HeaderSVGPhoto from '../../images/svg/svgheader/HeaderSVGPhoto';
import HeaderButtonSVG from '../../images/svg/svgheader/HeaderButtonSVG';
import ProfileSettings from '../ProfileІSettings/ProfileSettings';
import { HeaderModalContainer } from './HeaderModalStyled';

const HeaderModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isHeaderModalOpen, setIsHeaderModalOpen] = useState(false); // Add state for HeaderModalContainer

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const toggleHeaderModal = () => {
    setIsHeaderModalOpen((prevState) => !prevState);
  };

  return (
    <>
      {isModalOpen && <ProfileSettings onClose={closeModal} />}
      <HeaderButton onClick={toggleHeaderModal}>
        <HeaderSVGPhoto />
        <HeaderButtonSVG />
      </HeaderButton>
      <HeaderModalContainer $visible={isHeaderModalOpen}>
        <button onClick={openModal}>Setting</button>
        <button onClick={toggleHeaderModal}>Close</button>
      </HeaderModalContainer>
    </>
  );
};

export default HeaderModal;
