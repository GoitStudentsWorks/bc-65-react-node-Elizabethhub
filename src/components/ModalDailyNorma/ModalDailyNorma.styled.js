import styled from 'styled-components';

export const StyledBackdrop = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: var(--modal-backdrop);
  backdrop-filter: blur(3.5px);
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
`;

export const StyledWrapper = styled.div`
  position: relative;
  border-radius: 10px;
  backdrop-filter: blur(50px);
  background: var(--white);
  background-size: 130% 130%;
  background-position: center;
  width: 280px;
  padding: 24px 12px 24px 12px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media only screen and (min-width: 768px) {
    width: 704px;
    padding: 32px 24px 32px 24px;
  }
  @media only screen and (min-width: 1280px) {
    width: 592px;
    padding: 32px 24px 32px 24px;
  }

  h2 {
    color: var(--black);
    text-align: start;
    font-size: 26px;
    font-weight: 500;
    margin-bottom: 24px;
  }
  h3 {
    color: var(--black);
    text-align: start;
    font-size: 18px;
    font-weight: 500;
    margin-bottom: 16px;
  }
  p {
    color: var(--black);
    text-align: start;
    font-size: 16px;
    margin-bottom: 12px;
  }
  span {
    color: var(--blue);
    font-size: 18px;
    font-weight: 700;
  }
`;

export const StyledCross = styled.button`
  position: absolute;
  right: 12px;
  top: 28px;
  background-color: transparent;
  border: none;
  outline: transparent;
  transition: all 0.5s ease;
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
  }
  @media only screen and (min-width: 768px) {
    top: 36px;
    right: 24px;
  }
  @media only screen and (min-width: 1280px) {
    top: 36px;
    right: 24px;
  }
`;

export const StyledInputBox = styled.div`
  margin-bottom: 24px;

  input {
    width: 120px;
    border-radius: 6px;
    border: 1px solid var(--primary-mediumblue);
    padding: 12px 10px 12px 10px;
    &::placeholder {
      color: var(--blue);
      font-size: 16px;
    }
    @media only screen and (min-width: 768px) {
      width: 656px;
    }
    @media only screen and (min-width: 1280px) {
      width: 544px;
    }
  }
`;
