import styled from 'styled-components';
import welcomebackgroundImageMobail from '../../images/backgroundWelcome/MobileWelkome.jpg';
import welcomebackgroundImageTablet from '../../images/backgroundWelcome/TabletTrackerofwaterMainpage.jpg';
import welcomebackgroundImageDesctop from '../../images/backgroundWelcome/DesktopTrackerofwaterMainpage.jpg';

export const DivImgContainerWelcome = styled.div`
  z-index: -1;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-repeat: no-repeat;
  background-size: cover;
  @media only screen and (min-width: 768px) {
    background-image: url(${welcomebackgroundImageTablet});
  }
  @media only screen and (min-width: 1280px) {
    background-image: url(${welcomebackgroundImageDesctop});
  }
  @media only screen and (max-width: 767px) {
    background-image: url(${welcomebackgroundImageMobail});
  }
`;
