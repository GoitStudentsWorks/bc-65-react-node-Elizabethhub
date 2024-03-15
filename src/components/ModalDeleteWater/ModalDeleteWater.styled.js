import styled from 'styled-components';

export const StyledModalDeleteBackdrop = styled.div`
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

export const StyledModalDeleteWrapper = styled.div`
  position: relative;
  border-radius: 10px;
  backdrop-filter: blur(50px);
  background: var(--white);
  background-size: 130% 130%;
  background-position: center;
  width: 280px;
  padding: 32px 24px 32px 24px;
  display: flex;
  flex-direction: column;

  @media only screen and (min-width: 768px) {
    width: 592px;
  }
  @media only screen and (min-width: 1280px) {
    width: 592px;
  }

  h2 {
    color: var(--black);
    text-align: start;
    font-size: 26px;
    font-weight: 500;
    margin-bottom: 24px;
  }
`;

export const StyledModalDeleteForm = styled.form`
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  p {
    color: var(--black);
    text-align: start;
    font-weight: 500;
    font-size: 18px;
    margin-bottom: 24px;
  }
`;

export const StyledModalDeleteClose = styled.button`
  position: absolute;
  right: 24px;
  top: 36px;
  background-color: transparent;
  border: none;
  outline: transparent;
  transition: all 0.5s ease;
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
  }
  @media only screen and (min-width: 768px) {
  }
  @media only screen and (min-width: 1280px) {
  }
`;

export const StyledModalDeleteButtons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: center;
  justify-content: center;

  @media only screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: end;
  }
  @media only screen and (min-width: 1280px) {
    flex-direction: row;
    justify-content: end;
  }
`;

export const StyledModalDeleteBtn = styled.button`
  width: 232px;
  border-radius: 10px;
  padding: 8px 30px 8px 30px;
  background-color: var(--primary-red);
  box-shadow: var(--modal-add-shadow);
  border: none;
  outline: transparent;

  font-weight: 500;
  font-size: 16px;
  align-items: center;
  justify-content: center;
  color: var(--white);

  transition: all 0.5s ease;
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
  }

  @media only screen and (min-width: 768px) {
    width: 160px;
  }
  @media only screen and (min-width: 1280px) {
    width: 160px;
  }
`;

export const StyledModalCancelBtn = styled.button`
  width: 232px;
  border-radius: 10px;
  padding: 8px 30px 8px 30px;
  background-color: var(--primary-mediumblue);
  border: none;
  outline: transparent;

  font-weight: 500;
  font-size: 16px;
  align-items: center;
  justify-content: center;
  color: var(--blue);

  transition: all 0.5s ease;
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
  }

  @media only screen and (min-width: 768px) {
    width: 160px;
  }
  @media only screen and (min-width: 1280px) {
    width: 160px;
  }
`;
