import { useEffect, useState } from 'react';
import { HeaderButton } from './Header.styled';
import HeaderSVGPhoto from '../../images/svg/svgheader/HeaderSVGPhoto';
import HeaderButtonSVG from '../../images/svg/svgheader/HeaderButtonSVG';

import {
  Backdrop,
  ButtonLogOut,
  DivButtonLogOut,
  DivHeaderModalContainer,
  HeaderModalButton,
  HeaderModalButtonSpan,
  HeaderModalContainer,
  HeaderModalLogOutContainer,
  SpanLogOut,
  SpanLogOutQuestion,
  Test1,
  Test2,
  UserIMG,
} from './HeaderModalStyled';
import SettingModal from '../SettingModal/SettingModal';
import SettingSVG from '../../images/svg/svgheader/SettingSVG';
import ClouseSVG from '../../images/svg/svgheader/ClouseSVG';
import HeaderButtonRotateSVG from '../../images/svg/svgheader/HeaderButtonRotateSVG';
import { useDispatch, useSelector } from 'react-redux';
import { logoutThunk } from '../../store/auth/thunks';
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';
import { selectUser } from '../../store/auth/selectors';
import { useTranslation } from 'react-i18next';
import DivSetting from './language/languageSelectorComponent';
import { useMediaQuery } from 'react-responsive';

const HeaderModal = () => {
  const { t } = useTranslation();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isHeaderModalOpen, setIsHeaderModalOpen] = useState(false);
  const [isHeaderModalLogOut, setIsHeaderModalLogOut] = useState(false);
  const [isBackdropVisible, setIsBackdropVisible] = useState(false);
  const [imageUser, setImageUser] = useState('');
  const userProfile = useSelector(selectUser);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isTabletOrMobile = useMediaQuery({ query: '(min-width: 768px)' });
  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === 'Escape') {
        if (isModalOpen) {
          closeModal();
        } else if (isHeaderModalOpen) {
          toggleHeaderModal();
        } else if (isHeaderModalLogOut) {
          LogOutHeaderModal();
        }
      }
    };

    document.addEventListener('keydown', handleKeyPress);

    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, [isModalOpen, isHeaderModalOpen, isHeaderModalLogOut]);

  useEffect(() => {
    if (isModalOpen || isHeaderModalLogOut) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isModalOpen, isHeaderModalOpen, isHeaderModalLogOut]);

  useEffect(() => {
    if (userProfile && userProfile.avatarURL) {
      let avatarURL = userProfile.avatarURL;

      if (avatarURL.startsWith('avatars')) {
        avatarURL = `https://byte-water-back.onrender.com/${avatarURL}`;
      }
      setImageUser(avatarURL);
    }
  }, [userProfile]);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const toggleHeaderModal = () => {
    setIsHeaderModalOpen((prevState) => !prevState);
    setIsBackdropVisible((prevState) => !prevState);
  };

  const LogOutHeaderModal = () => {
    setIsHeaderModalLogOut((prevState) => !prevState);
    setIsHeaderModalOpen(false);
    setIsBackdropVisible(false);
  };

  function handleLogout() {
    dispatch(logoutThunk())
      .unwrap()
      .then(() => {
        navigate('/signin');
        toast.info('Exit successful!');
        LogOutHeaderModal();
      })
      .catch(() => toast.error('Ooops... Something went wrong!'));
  }

  return (
    <>
      {isModalOpen && (
        <div>
          <Backdrop $visible={isBackdropVisible} />

          <SettingModal onClose={closeModal} />
        </div>
      )}
      {userProfile ? (
        <>
          <HeaderButton onClick={toggleHeaderModal}>
            <UserIMG src={imageUser} alt="User Avatar" />
            {isHeaderModalOpen ? (
              <HeaderButtonRotateSVG />
            ) : (
              <HeaderButtonSVG />
            )}
          </HeaderButton>
        </>
      ) : (
        <HeaderSVGPhoto />
      )}
      <DivHeaderModalContainer>
        <HeaderModalContainer $visible={isHeaderModalOpen}>
          <HeaderModalButton onClick={openModal}>
            <SettingSVG />
            <HeaderModalButtonSpan>{t('setting')}</HeaderModalButtonSpan>
          </HeaderModalButton>
          <HeaderModalButton onClick={LogOutHeaderModal}>
            <ClouseSVG />
            <HeaderModalButtonSpan>{t('logOut')}</HeaderModalButtonSpan>
          </HeaderModalButton>
          {!isTabletOrMobile && <DivSetting />}
        </HeaderModalContainer>
      </DivHeaderModalContainer>

      <>
        <Test1 $visible={isHeaderModalLogOut}>
          <Backdrop onClick={LogOutHeaderModal} $visible={isBackdropVisible} />
          <Test2>
            <HeaderModalLogOutContainer $visible={isHeaderModalLogOut}>
              <SpanLogOut>{t('logOut')}</SpanLogOut>
              <SpanLogOutQuestion>
                {t('doYouReallyWantToLeave')}
              </SpanLogOutQuestion>
              <DivButtonLogOut>
                <ButtonLogOut onClick={LogOutHeaderModal}>
                  {t('cancel')}
                </ButtonLogOut>
                <ButtonLogOut onClick={handleLogout}>
                  {t('logOut')}
                </ButtonLogOut>
              </DivButtonLogOut>
            </HeaderModalLogOutContainer>
          </Test2>
        </Test1>
      </>
    </>
  );
};

export default HeaderModal;
