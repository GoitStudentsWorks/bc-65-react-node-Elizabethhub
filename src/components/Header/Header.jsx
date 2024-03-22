import SvgIconMobail from '../../images/svg/svgIcon/SvgIconMobail';
import {
  HeaderDivButtonContainer,
  HeaderDivContainer,
  HeaderDivSetting,
  HeaderDivSwitch,
  HeaderLink,
} from './Header.styled';

import { Link, useNavigate } from 'react-router-dom';
import HeaderModal from './HeaderModal';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from '../../store/auth/selectors';
import { HeaderUserName } from './HeaderModalStyled';
import { useEffect, useState } from 'react';
import DivSetting from './language/DivSetting';
import { useTranslation } from 'react-i18next';
import Switch from './ThemeStyled/SwitchTheme/Switch';
import { useMediaQuery } from 'react-responsive';

const Header = ({ toggleTheme, isDarkTheme }) => {
  const userProfile = useSelector(selectUser);
  const { t } = useTranslation();
  const [nameUser, setNameUser] = useState('');
  const isTabletOrMobile = useMediaQuery({ query: '(min-width: 768px)' });
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
        <HeaderDivSwitch>
          <Link to="/" style={{ textDecoration: 'none' }}>
            <SvgIconMobail />
          </Link>
          <Switch toggleTheme={toggleTheme} isDarkTheme={isDarkTheme} />
        </HeaderDivSwitch>
        <HeaderDivSetting>
          {isTabletOrMobile && <DivSetting />}
          <HeaderDivButtonContainer>
            {userProfile ? (
              <>
                <HeaderUserName>{nameUser}</HeaderUserName>
              </>
            ) : (
              <HeaderLink to="/signin" style={{ textDecoration: 'none' }}>
                {t('signIn')}
              </HeaderLink>
            )}

            <HeaderModal />
          </HeaderDivButtonContainer>
        </HeaderDivSetting>
      </HeaderDivContainer>
    </>
  );
};

export default Header;
