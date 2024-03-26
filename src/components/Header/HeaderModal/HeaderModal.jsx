import { useEffect, useState } from 'react';
import { HeaderButton } from '../Header.styled';
import HeaderSVGPhoto from '../../../images/svg/svgheader/HeaderSVGPhoto';
import HeaderButtonSVG from '../../../images/svg/svgheader/HeaderButtonSVG';

import {
  Backdrop,
  ButtonCancel,
  ButtonLogOut,
  DivButtonLogOut,
  DivHeaderModalContainer,
  HeaderModalButton,
  HeaderModalButtonSpan,
  HeaderModalContainer,
  HeaderModalLogOutContainer,
  SpanLogOut,
  SpanLogOutQuestion,
  StyledCros,
  Test1,
  Test2,
  Test3,
  UserIMG,
} from './HeaderModalStyled';
import SettingModal from '../../SettingModal/SettingModal';
import SettingSVG from '../../../images/svg/svgheader/SettingSVG';
import ClouseSVG from '../../../images/svg/svgheader/ClouseSVG';
import HeaderButtonRotateSVG from '../../../images/svg/svgheader/HeaderButtonRotateSVG';
import { useDispatch, useSelector } from 'react-redux';
import { logoutThunk } from '../../../store/auth/thunks';
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';
import { selectUser } from '../../../store/auth/selectors';
import { useTranslation } from 'react-i18next';

import { useMediaQuery } from 'react-responsive';
import DivSetting from '../../../language/languageSelectorComponent';
import { StyledCross } from '../../ModalDailyNorma/ModalDailyNorma.styled';
import SvgCross from '../../../images/svg/svgModal/SvgCross';

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
    setIsHeaderModalOpen(false);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const toggleHeaderModal = () => {
    setIsHeaderModalOpen((prevState) => !prevState);
    setIsBackdropVisible((prevState) => !prevState);
    setIsModalOpen(false);
  };

  const LogOutHeaderModal = () => {
    setIsHeaderModalLogOut((prevState) => !prevState);
    setIsHeaderModalOpen(false);
    setIsBackdropVisible(false);
    setIsModalOpen(false);
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
          <HeaderModalButton aria-label="setting" onClick={openModal}>
            <SettingSVG />
            <HeaderModalButtonSpan>{t('setting')}</HeaderModalButtonSpan>
          </HeaderModalButton>
          <HeaderModalButton aria-label="logOut" onClick={LogOutHeaderModal}>
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
              <Test3>
                <SpanLogOut>{t('logOut')}</SpanLogOut>
                <StyledCros
                  onClick={LogOutHeaderModal}
                  aria-label={t('closeWindow')}
                >
                  <SvgCross />
                </StyledCros>
              </Test3>
              <SpanLogOutQuestion>
                {t('doYouReallyWantToLeave')}
              </SpanLogOutQuestion>
              <DivButtonLogOut>
                <ButtonCancel aria-label="cancel" onClick={LogOutHeaderModal}>
                  {t('cancel')}
                </ButtonCancel>
                <ButtonLogOut aria-label="logOut" onClick={handleLogout}>
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
