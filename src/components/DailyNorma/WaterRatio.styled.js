import styled from 'styled-components';

export const RangeWrapper = styled.div`
  margin-bottom: 40px;
`;

export const RangeInputTitl = styled.p`
  font-size: 18px;
  line-height: 24px;
  color: #407bff;
  margin-bottom: 8px;
`;

export const RangeInput = styled.input`
  width: 256px;
  height: 14px;
  border-radius: 10px;
  border: 1px;
`;

export const RangePercentWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 93px;
`;

export const RangePercent = styled.p`
  color: #407bff;
  font-size: ${(props) => props.$fsize || ' 12px'};
  font-weight: ${(props) => props.$fweight};
  /* margin-top: 16px; */
  display: flex;
  flex-direction: column;
`;

export const RangeSpanLine = styled.span`
  width: 8px;
  color: #d7e3ff;
  font-size: 12px;
  font-weight: 400;
  margin: 0 auto;
  padding-bottom: 4px;
`;

export const RangeButton = styled.button`
  margin-top: 16px;
  width: 280px;
  height: 36px;
  border: none;
  background-color: #407bff;
  color: #ffffff;
  border-radius: 10px;
  position: absolute;
`;
