import styled from 'styled-components';
import welcomebackgroundImageMobail from '../../images/backgroundWelcome/MobileBacgraund.jpg';
import welcomebackgroundImageTablet from '../../images/backgroundWelcome/TabletMainpage.jpg';
import welcomebackgroundImageDesctop from '../../images/backgroundWelcome/DesktopMainpage.jpg';
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
  flex-direction: column;
  gap: 165px;
  @media only screen and (min-width: 768px) {
    gap: 60px;
  }
  @media only screen and (min-width: 1440px) {
    flex-direction: row;
    gap: 81px;
    justify-content: center;
    align-items: flex-end;
    padding-top: 80px;
  }
`;
export const Welcomeh1 = styled.h1`
  width: 246px;
  font-weight: 700;
  font-size: 28px;
  padding-top: 24px;
  padding-bottom: 16px;
  @media only screen and (min-width: 768px) {
    width: 100%;
  }
  @media only screen and (min-width: 1440px) {
    font-size: 36px;
  }
`;
export const Welcomeh2 = styled.h2`
  width: 220px;
  font-weight: 400;
  font-size: 24px;

  padding-bottom: 24px;
  @media only screen and (min-width: 768px) {
    width: 100%;
  }
  @media only screen and (min-width: 1440px) {
    font-size: 26px;
  }
`;
export const Welcomeh3 = styled.h3`
  font-weight: 500;
  font-size: 18px;
  padding-bottom: 12px;
  @media only screen and (min-width: 768px) {
    width: 100%;
  }
  @media only screen and (min-width: 1440px) {
  }
`;

export const WelcomeLiSpan = styled.span`
  font-size: 16px;

  @media only screen and (min-width: 768px) {
  }
  @media only screen and (min-width: 1440px) {
  }
`;

export const WelcomeUl = styled.ul`
  display: flex;
  gap: 16px;
  flex-direction: column;
  padding-bottom: 24px;
  @media only screen and (min-width: 768px) {
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
  }
  @media only screen and (min-width: 1440px) {
    flex-direction: column;
  }
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
  border-radius: 10px;
  padding: 32px 24px;

  box-shadow: 0 4px 14px 0 rgba(64, 123, 255, 0.3);
  background: #ecf2ff;
  max-width: 380px;
  margin-bottom: 20px;
  @media only screen and (min-width: 768px) {
    max-width: 494px;
  }
  @media only screen and (min-width: 1440px) {
    margin-bottom: 0px;
  }
`;
export const WelcomeNavLink = styled(NavLink)`
  max-width: 280px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  padding: 9px;
  width: 100%;

  box-shadow: 0 4px 8px 0 rgba(64, 123, 255, 0.34);
  background: #407bff;

  font-weight: 500;
  font-size: 16px;

  text-align: center;
  color: #fff;
  border: none;
  @media only screen and (min-width: 768px) {
    max-width: 336px;
    padding: 13px;
  }
  @media only screen and (min-width: 1440px) {
    max-width: 384px;
  }
`;

export const TryTrackerDivContainer = styled.div`
  @media only screen and (min-width: 768px) {
  }
`;

export const WelcomeWhyDrinkH3 = styled.h3`
  padding-bottom: 12px;

  font-weight: 500;
  font-size: 18px;

  @media only screen and (min-width: 768px) {
  }
`;
export const WelcomeWhyDrinkUl = styled.ul`
  padding-left: 20px;
  @media only screen and (min-width: 768px) {
  }
`;
export const TabletWoterDivImg = styled.div`
  @media only screen and (max-width: 767px) {
    display: none;
  }

  position: absolute;
  left: 51%;
  top: 43%;
  z-index: -1;
  @media only screen and (min-width: 1440px) {
    display: none;
  }
`;

export const DesctopWoterDivImg = styled.div`
  @media only screen and (max-width: 1439px) {
    display: none;
  }

  position: absolute;
  left: 71%;
  top: 61%;
  z-index: -1;
`;
