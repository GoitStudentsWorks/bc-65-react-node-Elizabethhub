import styled from 'styled-components';

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

export const Main = styled.main`
  margin-top: 20px;
`;

export const DivImgContainer = styled.div`
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
`;
