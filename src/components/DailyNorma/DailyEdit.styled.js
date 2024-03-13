import styled from 'styled-components';

export const DailyWrapper = styled.div`
  margin-top: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #ecf2ff;
  border-radius: 10px;
  padding-top: 8px;
  gap: 12px;
  width: 164px;
  height: 74px;
`;

export const DailyWrapperEdit = styled.div`
  display: flex;
  align-items: center;
  margin-right: auto;
  margin-left: 20px;
`;

export const DailyTittle = styled.p`
  font-weight: 500;
  font-size: 18px;
  line-height: 24px;
  color: var(--primery-color-black);
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
`;
