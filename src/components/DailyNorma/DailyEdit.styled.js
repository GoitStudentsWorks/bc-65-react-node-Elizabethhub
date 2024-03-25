import styled from 'styled-components';

export const DailyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 8px;
  padding-right: 20px;
  padding-bottom: 8px;
  padding-left: 20px;

  border-radius: 10px;
  padding-top: 8px;
  gap: 12px;

  height: 74px;

  background-color: ${(props) => props.theme.dailyWrapperBackground};
  border: ${(props) => props.theme.dailyWrapperBorder};
  box-shadow: ${(props) => props.theme.dailyWrapperBoxShadow};

  @media only screen and (min-width: 768px) {
    margin-bottom: -45px;
  }
  @media only screen and (min-width: 1440px) {
    margin-bottom: -65px;
  }
`;

export const DailyWrapperEdit = styled.div`
  display: flex;
  align-items: center;
  margin: 0;
`;

export const DailyTittle = styled.p`
  font-weight: 500;
  font-size: 18px;
  line-height: 24px;
  color: var(--primery-color-black);
`;

export const DailyWrapperContainer = styled.div`
  display: flex;
`;

export const DailyLiter = styled.p`
  font-weight: 700;
  font-size: 22px;
  color: #407bff;
  padding-right: 12px;
`;

export const DailyEditButton = styled.button`
  background: transparent;
  border: none;
  color: #8baeff;
  position: relative;
  z-index: 1;
  outline: transparent;
  &:hover {
    transform: scale(1.05);
  }
`;
