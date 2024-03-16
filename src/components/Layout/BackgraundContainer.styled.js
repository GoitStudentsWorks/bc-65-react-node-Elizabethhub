import styled from 'styled-components';
import imageMobail from '../../images/backgroundImg/Mobile.jpg';
import imageTablet from '../../images/backgroundImg/Tablet.jpg';
import imageDesktop from '../../images/backgroundImg/Desktop.jpg';

export const BackgraundContainer = styled.div`
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
    background-image: url(${imageTablet});
  }
  @media only screen and (min-width: 1280px) {
    background-image: url(${imageDesktop});
  }
  @media only screen and (max-width: 767px) {
    background-image: url(${imageMobail});
  }
`;
