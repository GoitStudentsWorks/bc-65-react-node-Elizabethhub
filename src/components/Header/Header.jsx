import SvgIconMobail from '../../images/svg/svgIcon/SvgIconMobail';
import {
  HeaderDivButtonContainer,
  HeaderDivContainer,
  HeaderLink,
} from './Header.styled';

import { Link } from 'react-router-dom';
import HeaderModal from './HeaderModal';
import { useSelector } from 'react-redux';
import { selectUser } from '../../store/auth/selectors';
import { HeaderUserName } from './HeaderModalStyled';
import { useEffect, useState } from 'react';

const Header = () => {
  const userProfile = useSelector(selectUser);

  const [nameUser, setNameUser] = useState('');

  useEffect(() => {
    if (userProfile) {
      setNameUser(cutUserName(userProfile.username));
    }
  }, [userProfile, userProfile?.username]);

  function cutUserName(name) {
    if (name.startsWith('User')) {
      return name.slice(0, 4);
    }
    return name;
  }

  return (
    <>
      <HeaderDivContainer>
        <Link to="/" style={{ textDecoration: 'none' }}>
          <SvgIconMobail />
        </Link>

        <HeaderDivButtonContainer>
          {userProfile ? (
            <>
              <HeaderUserName>{nameUser}</HeaderUserName>
            </>
          ) : (
            <HeaderLink to="/signin" style={{ textDecoration: 'none' }}>
              Sign in
            </HeaderLink>
          )}

          <HeaderModal />
        </HeaderDivButtonContainer>
      </HeaderDivContainer>
    </>
  );
};

export default Header;
