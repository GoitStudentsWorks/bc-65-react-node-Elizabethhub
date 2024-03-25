import styled from 'styled-components';

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
  /* background-repeat: repeat-y; */
  background-size: cover;
  background-position: center;

  @media only screen and (min-width: 768px) {
    background-image: ${(props) => props.theme.backgroundImageTablet};
  }
  @media only screen and (min-width: 768px) and (resolution >= 2dppx) {
    background-image: ${(props) => props.theme.backgroundImageTablet2x};
  }

  @media only screen and (min-width: 1280px) {
    background-image: ${(props) => props.theme.backgroundImage};
  }
  @media only screen and (min-width: 1280px) and (resolution >= 2dppx) {
    background-image: ${(props) => props.theme.backgroundImage2x};
  }
  @media only screen and (max-width: 767px) {
    background-image: ${(props) => props.theme.backgroundImageMobale};
  }
  @media only screen and (max-width: 767px) and (resolution >= 2dppx) {
    background-image: ${(props) => props.theme.backgroundImageMobale2x};
  }
`;
