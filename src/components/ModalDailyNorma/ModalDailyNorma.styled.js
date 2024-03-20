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

export const StyledWrapper = styled.form`
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  position: relative;
  border-radius: 10px;
  background: var(--white);
  background-size: 130% 130%;
  background-position: center;
  width: 280px;
  padding: 24px 12px 24px 12px;
  display: flex;
  flex-direction: column;

  @media only screen and (min-width: 768px) {
    width: 704px;
    padding: 32px 24px 32px 24px;
    .formula {
      display: inline-block;
      margin-right: 24px;
    }
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
    line-height: 32px;
    margin-bottom: 24px;
  }
  h3 {
    color: var(--black);
    text-align: start;
    font-size: 18px;
    font-weight: 500;
    margin-bottom: 10px;
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
    font-weight: 400;
    line-height: 24px;
  }

  .hint {
    font-size: 12px;
    padding: 10px;
    border-radius: 6px;
    border: 1px solid var(--primary-mediumblue);
    color: #8f8f8f;
    margin-bottom: 24px;
    line-height: 16px;
  }
  .star {
    font-size: 12px;
    line-height: 16px;
  }
  .radioGroup {
    display: flex;
    justify-content: flex-start;
    padding: 0;
    margin-bottom: 10px;
    padding-left: 5;
  }
`;
export const SaveButton = styled.button`
  width: 256px;
  border-radius: 10px;
  padding: 8px 30px 8px 30px;
  background-color: var(--blue);
  box-shadow: var(--modal-add-shadow);
  color: var(--white);
  border: none;
  outline: transparent;
  transition: all 0.5s ease;
  margin-top: 8px;
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
  }
  @media only screen and (min-width: 768px) {
    width: 160px;
    height: 44px;
    font-size: 18px;
    flex-direction: row-reverse;
    margin-left: auto;
  }
  @media only screen and (min-width: 1280px) {
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
  input {
    width: 100%;
    border-radius: 6px;
    border: 1px solid var(--primary-mediumblue);
    background-color: ${(props) => props.theme.formInputBackground};
    color: ${(props) => props.theme.formInputColor};
    padding: 12px 10px 12px 10px;
    margin-top: 8px;
    margin-bottom: 16px;
    &::placeholder {
      color: var(--blue);
      font-size: 16px;
    }
    &:hover,
    &:focus {
      color: var(--blue);
      border: 1px solid var(--primary-mediumblue);
      outline: transparent;
    }
    @media only screen and (min-width: 768px) {
      width: 656px;
    }
    @media only screen and (min-width: 1280px) {
      width: 544px;
    }
  }
  input[type='radio']:focus {
    outline: none;
    box-shadow: none;
  }
  .no-margin {
    margin-bottom: 0;
    padding: 0;
  }
`;
export const StyledRequiredLitres = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 20px;
  p {
    width: 180px;
    margin-bottom: 0;
  }
  span {
    padding: 10px;
    font-weight: 700;
    margin-right: 12px;
  }
  @media only screen and (min-width: 768px) {
    justify-content: flex-start;
    p {
      width: 328px;
    }
    span {
      padding: 0;
      line-height: 20px;
      margin-left: 5px;
    }
  }
  @media only screen and (min-width: 1280px) {
    width: 544px;
  }
`;
