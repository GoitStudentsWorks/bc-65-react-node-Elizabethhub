import SvgIconMobail from '../../images/svg/svgIcon/SvgIconMobail';
import {
  HeaderDivButtonContainer,
  HeaderDivContainer,
  HeaderLink,
} from './Header.styled';

import { Link } from 'react-router-dom';
import HeaderModal from './HeaderModal';
const Header = () => {
  return (
    <>
      <HeaderDivContainer>
        <Link to="/" style={{ textDecoration: 'none' }}>
          <SvgIconMobail />
        </Link>

        <HeaderDivButtonContainer>
          <HeaderLink to="/signin" style={{ textDecoration: 'none' }}>
            Sign in
          </HeaderLink>
          <HeaderModal />
        </HeaderDivButtonContainer>
      </HeaderDivContainer>
    </>
  );
};

export default Header;
