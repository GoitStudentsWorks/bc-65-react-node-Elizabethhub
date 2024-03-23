import styled from 'styled-components';

export const ContentWrapperCalendar = styled.div`
  width: 100%;
`;

export const MonthHeading = styled.h3`
  font-size: 24px;
  font-weight: 500;
  line-height: 1.25;
  letter-spacing: 0em;
  text-align: left;
  color: ${(props) => props.theme.colorBody};

  @media screen and (min-width: 768px) {
    font-size: 26px;
    line-height: 1.23;
  }
`;

export const HeadingWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
`;

export const MonthSwitcher = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  .arrow {
    background: transparent;
    border: none;
    padding: 0;
    width: 14px;
    cursor: pointer;
    transition: 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }
  .arrow:is(:hover, :focus) {
    transform: translateY(-1px);
  }

  .month__name {
    font-size: 16px;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: 0em;
    text-align: center;
    color: #407bff;
    width: 120px;
  }
`;

export const MonthList = styled.ul`
  position: relative;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 16px 26px;
  margin-top: 16px;
  list-style: none;

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(10, 1fr);
    gap: 20px 34px;
  }

  @media screen and (min-width: 1440px) {
    gap: 20px 22px;
  }
`;

export const DayStyles = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  text-align: center;
  font-weight: 400;
  cursor: pointer;
  letter-spacing: 0em;
  &.today {
    background-color: lightblue;
  }

  span {
    display: block;
  }
  .day {
    width: 32px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${(props) => props.theme.dayStylesDayBackground};
    border-radius: 50%;
    border: ${({ $percentage }) =>
      $percentage < 100 ? '1px solid #FF9D43' : 'none'};

    font-size: 14px;
    line-height: 1.29;

    @media screen and (min-width: 768px) {
      width: 34px;
      height: 34px;
      font-size: 16px;
      line-height: 1.25;
    }
  }
  .percentage {
    font-size: 10px;
    line-height: 16px;
    color: ${(props) => props.theme.dayStylesDayPercentage};
  }
`;
