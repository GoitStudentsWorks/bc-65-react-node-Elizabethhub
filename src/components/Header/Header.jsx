import { useState } from 'react';
import ProfileSettings from '../ProfileІSettings/ProfileSettings';
import SvgIconMobail from '../../images/svg/svgIcon/SvgIconMobail';
import {
  HeaderButton,
  HeaderDivButtonContainer,
  HeaderDivContainer,
} from './HeaderStyled';
import HeaderButtonSVG from '../../images/svg/svgheader/HeaderButtonSVG';
import HeaderSVGPhoto from '../../images/svg/svgheader/HeaderSVGPhoto';
import { Link } from 'react-router-dom';
const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      {isModalOpen && <ProfileSettings onClose={closeModal} />}
      <HeaderDivContainer>
        <SvgIconMobail />
        <HeaderDivButtonContainer>
          <Link to="/signin" style={{ textDecoration: 'none' }}>
            Sign in
          </Link>
          <HeaderButton onClick={openModal}>
            <HeaderSVGPhoto />
            {/* <HeaderImg></HeaderImg> */}
            <HeaderButtonSVG />
          </HeaderButton>
        </HeaderDivButtonContainer>
      </HeaderDivContainer>
    </>
  );
};

export default Header;
