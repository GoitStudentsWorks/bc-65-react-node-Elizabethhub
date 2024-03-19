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

const HeaderModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isHeaderModalOpen, setIsHeaderModalOpen] = useState(false);
  const [isHeaderModalLogOut, setIsHeaderModalLogOut] = useState(false);
  const [isBackdropVisible, setIsBackdropVisible] = useState(false);
  const [imageUser, setImageUser] = useState('');
  const userProfile = useSelector(selectUser);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (isModalOpen || isHeaderModalOpen || isHeaderModalLogOut) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isModalOpen, isHeaderModalOpen, isHeaderModalLogOut]);

  useEffect(() => {
    if (userProfile) {
      userProfile?.avatarURL;
      setImageUser(userProfile.avatarURL);
    }
  }, [userProfile, userProfile?.avatarURL]);

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
            <HeaderModalButtonSpan>Setting</HeaderModalButtonSpan>
          </HeaderModalButton>
          <HeaderModalButton onClick={LogOutHeaderModal}>
            <ClouseSVG />
            <HeaderModalButtonSpan>Log out</HeaderModalButtonSpan>
          </HeaderModalButton>
        </HeaderModalContainer>
      </DivHeaderModalContainer>

      <>
        <Test1 $visible={isHeaderModalLogOut}>
          <Backdrop onClick={LogOutHeaderModal} $visible={isBackdropVisible} />
          <Test2>
            <HeaderModalLogOutContainer $visible={isHeaderModalLogOut}>
              <SpanLogOut>Log out</SpanLogOut>
              <SpanLogOutQuestion>
                Do you really want to leave?
              </SpanLogOutQuestion>
              <DivButtonLogOut>
                <ButtonLogOut onClick={LogOutHeaderModal}>Cancel</ButtonLogOut>
                <ButtonLogOut onClick={handleLogout}>Log out</ButtonLogOut>
              </DivButtonLogOut>
            </HeaderModalLogOutContainer>
          </Test2>
        </Test1>
      </>
    </>
  );
};

export default HeaderModal;
