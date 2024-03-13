import styled from 'styled-components';
import welcomebackgroundImageMobail from '../../images/backgroundWelcome/MobileWelkome.jpg';
import welcomebackgroundImageTablet from '../../images/backgroundWelcome/TabletTrackerofwaterMainpage.jpg';
import welcomebackgroundImageDesctop from '../../images/backgroundWelcome/DesktopTrackerofwaterMainpage.jpg';
import { NavLink } from 'react-router-dom';

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

export const WelcomeDivCantainer = styled.div`
  display: flex;
`;
export const Welcomeh1 = styled.h1`
  width: 246px;
  font-weight: 700;
  font-size: 28px;
  padding-top: 24px;
  padding-bottom: 16px;
`;
export const Welcomeh2 = styled.h2`
  width: 220px;
  font-weight: 400;
  font-size: 24px;

  padding-bottom: 24px;
`;
export const Welcomeh3 = styled.h3`
  font-weight: 500;
  font-size: 18px;
  padding-bottom: 12px;
`;

export const WelcomeUl = styled.ul`
  display: flex;
  gap: 16px;
  flex-direction: column;
`;

export const WelcomeLi = styled.li`
  display: flex;
  gap: 8px;
  align-items: center;
`;

export const WelcomeButton = styled.button`
  border-radius: 10px;
  padding: 8px 30px;
  width: 100%;
  height: 36px;
  box-shadow: 0 4px 8px 0 rgba(64, 123, 255, 0.34);
  background: #407bff;

  font-weight: 500;
  font-size: 16px;

  text-align: center;
  color: #fff;
  border: none;
`;

export const WelcomeWhyDrinkLi = styled.li`
  position: relative;
  list-style: none;
  margin-bottom: 8px;

  &::before {
    content: '';
    position: absolute;
    left: -20px;
    top: 50%;
    transform: translateY(-50%);
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: #407bff;
  }
`;

export const WelcomeWhyDrinkDivCantainer = styled.div`
  display: none;
  border-radius: 10px;
  padding: 32px 24px;
  width: 494px;
  height: 300px;
  box-shadow: 0 4px 14px 0 rgba(64, 123, 255, 0.3);
  background: #ecf2ff;
  @media only screen and (min-width: 768px) {
    display: block;
  }
`;
export const WelcomeNavLink = styled(NavLink)`
  border-radius: 10px;
  padding: 8px 30px;
  width: 100%;
  height: 36px;
  box-shadow: 0 4px 8px 0 rgba(64, 123, 255, 0.34);
  background: #407bff;

  font-weight: 500;
  font-size: 16px;

  text-align: center;
  color: #fff;
  border: none;
`;
