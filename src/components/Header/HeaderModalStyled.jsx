import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-100%);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
    transform: translateY(0);
  }
  to {
    opacity: 0;
    transform: translateY(-100%);
  }
`;

const fadeAnimation = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 0.5;
  }
`;

export const HeaderModalContainer = styled.div`
  border-radius: 10px;
  padding: 16px;
  width: 118px;
  height: 88px;
  box-shadow: 0 4px 8px 0 rgba(64, 123, 255, 0.2);
  background: #fff;
  position: absolute;
  top: ${(props) => (props.$visible ? '35px' : '-100px')};
  right: 0px;
  opacity: ${(props) => (props.$visible ? '1' : '0')};
  transition:
    opacity 0.3s ease,
    top 0.3s ease;
  z-index: 999;
`;

export const HeaderModalLogOutContainer = styled.div`
  border-radius: 10px;
  padding: 32px 24px;
  width: 592px;
  height: 208px;
  background: #fff;
  position: fixed;
  top: 30%;
  left: 30%;
  /* transform: translate(-50%, -50%); */
  /* opacity: ${(props) => (props.$visible ? '1' : '0')};  */
  opacity: ${(props) => (props.$visible ? '1' : '0')};
  animation: ${(props) => (props.$visible ? fadeIn : fadeOut)} 1.5s ease;

  z-index: 999;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;
export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 10;
  opacity: ${(props) => (props.$visible ? '1' : '0')};
  animation: ${fadeAnimation} 0.5s ease forwards;
`;
export const DivHeaderModalContainer = styled.div`
  position: relative;
`;
export const ButtonHeaderModalCancel = styled.button``;
export const ButtonLogOut = styled.button`
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
    background: #ef5050;
    box-shadow: 0 4px 8px 0 rgba(64, 123, 255, 0.34);
    color: #fff;
  }

  &:focus {
    outline: none;
    background: #ef5050;
    box-shadow: 0 4px 8px 0 rgba(64, 123, 255, 0.34);
    color: #fff;
  }

  &:active {
    background: #ef5050;
    box-shadow: 0 2px 4px 0 rgba(64, 123, 255, 0.34);
    color: #fff;
  }
`;
export const DivTest = styled.div`
  /* display: none; */
`;

export const DivButtonLogOut = styled.div`
  display: flex;
  gap: 24px;
`;

export const SpanLogOut = styled.span`
  font-size: 26px;
  font-weight: 500;
`;
export const SpanLogOutQuestion = styled.span`
  font-size: 18px;
  font-weight: 500;
`;
