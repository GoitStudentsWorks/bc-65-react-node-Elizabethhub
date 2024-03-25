import styled from 'styled-components';

export const RangeWrapper = styled.div`
  margin-bottom: 40px;
  @media only screen and (min-width: 768px) {
    display: flex;
    justify-content: space-between;
  }
`;

export const RangeInputTitle = styled.p`
  font-size: 18px;
  line-height: 24px;
  color: #407bff;
`;
export const RemainingWaterContainer = styled.div`
  margin-bottom: 8px;
  display: flex;
  justify-content: space-between;
  align-content: center;
  align-items: center;
`;
export const RemainingWaterSpan = styled.span`
  font-size: 18px;
  line-height: 24px;
  color: #407bff;
`;

export const RangePercentWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media only screen and (min-width: 768px) {
    gap: 128px;
  }
  @media only screen and (min-width: 1440px) {
    gap: 156px;
  }
`;

export const RangePercent = styled.p`
  color: #407bff;
  font-size: ${(props) => props.$fsize || ' 12px'};
  font-weight: ${(props) => props.$fweight};

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
  /* width: 280px; */
  width: 100%;
  height: 36px;
  border: none;
  background: ${(props) => props.theme.buttonBackground};
  color: ${(props) => props.theme.buttonColor};
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 13px;
  outline: transparent;
  @media only screen and (min-width: 768px) {
    width: 336px;
    height: 44px;
  }
  @media only screen and (min-width: 1440px) {
    width: 178px;
    height: 44px;
    font-size: 18px;
    font-weight: 500;
  }
`;

export const Svg = styled.svg``;

export const StyledRangeInput = styled.input`
  -webkit-appearance: none;
  width: 100%;
  height: 8px;
  border-radius: 10px;
  border: 1px;

  background: linear-gradient(
    to right,
    ${(props) => props.theme.backgroundLinearGradientTo}
      ${(props) => props.value + '%'},
    ${(props) => props.theme.backgroundLinearGradientRight}
      ${(props) => props.value + '%'}
  );
  outline: none;
  pointer-events: none;

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 14px;
    height: 14px;
    border-radius: 100%;
    background: ${(props) => props.theme.rangeInputBackground};
    border: 1px solid #407bff;
    cursor: default;
  }

  @media only screen and (min-width: 768px) {
    width: 310px;
    margin-left: 6px;
  }
  @media only screen and (min-width: 1440px) {
    width: 363px;
    margin-left: 6px;
  }
`;

export const Wrp = styled.section`
  .svg-bottle {
    position: relative;
    z-index: -1;
  }
  @media only screen and (min-width: 1440px) {
    /* just for test */
    width: 600px;
  }
`;

export const BottleMobileSvg = styled.svg`
  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;
