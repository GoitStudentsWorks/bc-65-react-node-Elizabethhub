import styled from 'styled-components';

export const StyledModalAddBackdrop = styled.div`
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

export const StyledModalAddWrapper = styled.div`
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
    font-family: 'Roboto';
    font-size: 26px;
    font-weight: 500;
    margin-bottom: 24px; 
  }
  h3 {
    color: var(--black);
    text-align: start;
    font-family: 'Roboto';
    font-size: 18px;
    font-weight: 500;
    margin-bottom: 16px;
  }
  p {
    color: var(--black);
    text-align: start;
    font-family: 'Roboto';
    font-size: 16px;
    font-weight: 400;
    margin-bottom: 12px;
  }
`;

export const StyledModalAddClose = styled.button`
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

export const StyledModalAddTracker = styled.div`
  display: flex;
  gap: 7px;
  margin-bottom: 24px;
  align-items: center;

  button {
    border: 1px solid var(--modal-light-blue);
    border-radius: 30px;
    width: 44px;
    height: 44px;
    background-color: transparent;
    box-shadow: var(--modal-calc-shadow);
    display: flex;
    align-items: center;
    justify-content: center;

    transition: all 0.5s ease;
    cursor: pointer;

    &:hover {
      transform: scale(1.05);
    }
  }
  span {
    background-color: var(--primary-mediumblue);
    border-radius: 40px;
    padding: 6px 10px 6px 10px;
    min-width: 92px;

    text-align: center;
    font-family: 'Roboto';
    font-size: 18px;
    font-weight: 700;
    color: var(--blue);
  }
`;

export const StyledModalAddTime = styled.div`
  margin-bottom: 24px;

  input {
    width: 120px;
    border-radius: 6px;
    border: 1px solid var(--primary-mediumblue);
    padding: 12px 10px 12px 10px;
    &::placeholder {
      color: var(--blue);
      font-family: 'Roboto';
      font-size: 16px;
      font-weight: 400;
    }
    @media only screen and (min-width: 768px) {
      width: 656px;
    }
    @media only screen and (min-width: 1280px) {
      width: 544px;
    }
  }
`;
export const StyledModalAddValue = styled.div`
  margin-bottom: 24px;
  gap: 16px;

  input {
    width: 120px;
    border-radius: 6px;
    border: 1px solid var(--primary-mediumblue);
    padding: 12px 10px 12px 10px;
    &::placeholder {
      color: var(--blue);
      font-family: 'Roboto';
      font-size: 16px;
      font-weight: 400;
    }
    @media only screen and (min-width: 768px) {
      width: 656px;
    }
    @media only screen and (min-width: 1280px) {
      width: 544px;
    }
  }
`;

export const StyledModalAddSave = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
  @media only screen and (min-width: 768px) {
    flex-direction: row;
    gap: 24px;
    justify-content: end;
  }
  @media only screen and (min-width: 1280px) {
    flex-direction: row;
    gap: 24px;
    justify-content: end;
  }

  span {
    color: var(--blue);
    font-family: 'Roboto';
    font-size: 18px;
    font-weight: 700;
  }
  button {
    width: 256px;
    border-radius: 10px;
    padding: 8px 30px 8px 30px;
    background-color: var(--blue);
    box-shadow: var(--modal-add-shadow);
    color: var(--white);
    border: none;
    outline: transparent;
    transition: all 0.5s ease;
    cursor: pointer;

    &:hover {
      transform: scale(1.05);
    }
    @media only screen and (min-width: 768px) {
      width: 160px;
      padding: 10px 30px 10px 30px;
    }
    @media only screen and (min-width: 1280px) {
      width: 160px;
      padding: 10px 30px 10px 30px;
    }
  }
`;
