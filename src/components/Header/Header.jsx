import SvgIconMobail from '../../images/svg/svgIcon/SvgIconMobail';
import { HeaderDivButtonContainer, HeaderDivContainer } from './HeaderStyled';

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
          <Link to="/signin" style={{ textDecoration: 'none' }}>
            Sign in
          </Link>
          <HeaderModal />
        </HeaderDivButtonContainer>
      </HeaderDivContainer>
    </>
  );
};

export default Header;
