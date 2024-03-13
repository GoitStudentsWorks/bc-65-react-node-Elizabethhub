import styled from 'styled-components';
import backgroundImageMobail from '../../images/backgroundHome/HomescreenTrackerowaterHovers.png';
import backgroundImageTablet from '../../images/backgroundHome/HomescreenTrackerofwaterhoversTablet.jpg';
import backgroundImageDesktop from '../../images/backgroundHome/HomescreenTrackerofwaterhoversDesktop.jpg';

export const Container = styled.div`
  max-width: 100%;
  padding: 0 20px;
  margin: 0 auto;

  @media only screen and (min-width: 768px) {
    max-width: 768px;
    padding: 0 32px;
  }
  @media only screen and (min-width: 1280px) {
    max-width: 1280px;
    padding: 0 112px;
  }
  @media only screen and (min-width: 1440px) {
    max-width: 1440px;
    padding: 0 112px;
  }
`;
export const DivImgContainer = styled.div`
  z-index: -1;
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;

  background-repeat: no-repeat;
  background-size: cover;

  @media only screen and (min-width: 1280px) {
    background-image: url(${backgroundImageDesktop});
  }

  @media only screen and (min-width: 768px) {
    background-image: url(${backgroundImageTablet});
  }
  @media only screen and (max-width: 767px) {
    background-image: url(${backgroundImageMobail});
  }
`;
