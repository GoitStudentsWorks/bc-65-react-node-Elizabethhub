import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
    top: -50%;
  }
  to {
    opacity: 1;
    top: 50%;
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
    top: 50%;
  }
  to {
    opacity: 0;
    top: -50%;
  }
`;

export const HeaderModalContainer = styled.div`
  border-radius: 10px;
  padding: 16px;
  width: 118px;
  height: 88px;
  box-shadow: 0 4px 8px 0 rgba(64, 123, 255, 0.2);
  background: ${(props) => props.theme.modalCantainerBackground};
  position: absolute;
  top: ${(props) => (props.$visible ? '35px' : '-200px')};
  right: 0px;
  opacity: ${(props) => (props.$visible ? '1' : '0')};
  transition:
    opacity 0.3s ease,
    top 0.3s ease;
  z-index: 10;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 16px;
`;

export const HeaderModalLogOutContainer = styled.div`
  border-radius: 10px;
  padding: 32px 24px;
  width: 90%;
  max-width: 100%;
  height: 260px;
  background: ${(props) => props.theme.modalCantainerBackground};
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: ${(props) => (props.$visible ? '1' : '0')};
  visibility: ${(props) => (props.$visible ? 'visible' : 'hidden')};
  transition:
    opacity 0.5s,
    visibility 0.5s;
  animation: ${(props) => (props.$visible ? fadeIn : fadeOut)} 0.9s;
  z-index: 999;
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media only screen and (min-width: 768px) {
    width: 76.8%;
    max-width: 592px;
    height: 208px;
  }

  @media only screen and (min-width: 1440px) {
  }
`;

const BackdropfadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const BackdropfadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 10;
  opacity: ${(props) => (props.$visible ? '1' : '0')};

  animation: ${(props) => (props.$visible ? BackdropfadeOut : BackdropfadeIn)}
    1.5s ease forwards;
`;
export const DivHeaderModalContainer = styled.div`
  position: relative;
`;
export const ButtonHeaderModalCancel = styled.button``;
export const ButtonCancel = styled.button`
  background: #d7e3ff;
  border: none;
  border-radius: 10px;
  padding: 10px 30px;
  width: 160px;
  height: 44px;
  font-weight: 500;
  font-size: 18px;
  text-align: center;
  color: #407bff;
  transition:
    background 0.3s,
    box-shadow 0.3s,
    color 0.3s;

  &:hover {
    box-shadow: 0 4px 8px 0 rgba(64, 123, 255, 0.34);
    color: #407bff;
  }

  &:focus {
    outline: none;

    box-shadow: 0 4px 8px 0 rgba(64, 123, 255, 0.34);
    color: #407bff;
  }

  &:active {
    box-shadow: 0 2px 4px 0 rgba(64, 123, 255, 0.34);
    color: #407bff;
  }
`;

const hoverAnimation = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
`;

const clickAnimation = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(0.95);
  }
  100% {
    transform: scale(1);
  }
`;

export const ButtonLogOut = styled.button`
  background: #d7e3ff;
  border: none;
  border-radius: 10px;
  padding: 10px 30px;
  width: 232px;
  height: 36px;
  font-weight: 500;
  font-size: 16px;
  text-align: center;
  color: #407bff;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  transition:
    background 0.3s,
    box-shadow 0.3s,
    color 0.3s,
    transform 0.3s;

  &:hover {
    box-shadow: 0 4px 8px 0 rgba(64, 123, 255, 0.34);
    background: #ef5050;
    color: #fff;
    animation: ${hoverAnimation} 0.5s ease infinite;
  }

  &:focus {
    outline: none;
    background: #ef5050;
    color: #fff;
    box-shadow: 0 4px 8px 0 rgba(64, 123, 255, 0.34);
  }

  &:active {
    box-shadow: 0 2px 4px 0 rgba(64, 123, 255, 0.34);
    background: #ef5050;
    color: #fff;
    animation: ${clickAnimation} 0.2s ease;
  }

  @media only screen and (min-width: 768px) {
    width: 160px;
    height: 44px;
    font-size: 18px;
  }
`;

export const DivButtonLogOut = styled.div`
  display: flex;
  gap: 24px;
  align-items: center;
  flex-direction: column;
  @media only screen and (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
  }
`;

export const SpanLogOut = styled.span`
  font-size: 26px;
  font-weight: 500;
`;
export const SpanLogOutQuestion = styled.span`
  font-size: 18px;
  font-weight: 500;
`;
export const HeaderModalButton = styled.button`
  display: flex;
  gap: 8px;
  border: none;
  background-color: transparent;
  cursor: pointer;
  outline: none;
  flex-direction: row;
  align-items: center;
  padding: 0;
  height: 20px;
`;

export const HeaderModalButtonSpan = styled.span`
  font-weight: 400;
  font-size: 16px;

  color: #407bff;
`;

export const UserIMG = styled.img`
  width: 28px;
  height: 28px;
  border-radius: 100%;
`;

export const HeaderUserName = styled.span`
  font-weight: 400;
  font-size: 18px;

  text-align: right;

  padding-right: 8px;
`;

const fadeOutAnimation = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;
export const Test1 = styled.div`
  opacity: ${(props) => (props.$visible ? '1' : '0')};
  pointer-events: ${(props) => (props.$visible ? 'auto' : 'none')};
  transition: opacity 2s ease;
  animation: ${(props) => (props.$visible ? 'none' : fadeOutAnimation)} 0.3s
    ease forwards;
  visibility: ${(props) => (props.$visible ? 'visible' : 'hidden')};
`;
export const Test2 = styled.div``;
