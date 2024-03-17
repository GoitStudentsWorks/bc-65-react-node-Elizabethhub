import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';

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
`;

export const StyledModalForm = styled.form`
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
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
    outline: transparent;
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
    font-size: 18px;
    font-weight: 700;
    color: var(--blue);
  }
`;

export const StyledModalAddTime = styled.div`
  margin-bottom: 24px;
`;
export const StyledModalAddValue = styled.div`
  margin-bottom: 24px;
  gap: 16px;
`;

export const StyledModalAddInput = styled.input`
  width: 120px;
  border-radius: 6px;
  border: 1px solid var(--primary-mediumblue);
  padding: 12px 10px 12px 10px;
  color: var(--blue);
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

export const ModalAddDateWrap = styled.div`
  label {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  input {
    width: 120px;
    border-radius: 6px;
    border: 1px solid var(--primary-mediumblue);
    padding: 12px 10px 12px 10px;
    color: var(--blue);
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
`;

export const TimeGlobalStyles = createGlobalStyle`
  .react-datepicker-wrapper {
    position: relative;
     width: 100%;
  }

.react-datepicker__triangle {
    visibility: hidden;
  }

.react-datepicker.react-datepicker--time-only {
    position: absolute;
    font-size: 12px;
    left: 50%;
    top: 50%;
    transform: translate(-1%, -10%);
    width: 80px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: var(--primary-mediumblue);
    border-radius: 10px;
    border:1px solid var(--modal-light-blue);
    color:var(--blue);
  }

.react-datepicker__header.react-datepicker__header--time.react-datepicker__header--time--only{
  background-color: var(--blue);
  color:var(--white);
}
.react-datepicker__header .react-datepicker-time__header{
  color:var(--white);
}

.react-datepicker__time-container .react-datepicker__time .react-datepicker__time-box ul.react-datepicker__time-list::-webkit-scrollbar {
  width: 12px;
}

.react-datepicker__time-container .react-datepicker__time .react-datepicker__time-box ul.react-datepicker__time-list::-webkit-scrollbar-track {
  background-color: var(--primary-mediumblue);
}

.react-datepicker__time-container .react-datepicker__time .react-datepicker__time-box ul.react-datepicker__time-list::-webkit-scrollbar-thumb {
  background-color: var(--white);
  border-radius: 6px;
    background: var(--white);
    border: solid 1px var(--blue);
    height: 20px;
}

.react-datepicker__time-container .react-datepicker__time .react-datepicker__time-box ul.react-datepicker__time-list li.react-datepicker__time-list-item--selected{
  background-color: var(--blue) !important;
    color: var(--white);
    font-weight: bold;
}

.react-datepicker__time-container .react-datepicker__time .react-datepicker__time-box ul.react-datepicker__time-list li.react-datepicker__time-list-item:hover{
      padding-left: 16px;
      border-left: 2px solid var(--primary-orange);
      transition: all 0.3s ease;
}
.react-datepicker__time-container .react-datepicker__time .react-datepicker__time-box ul.react-datepicker__time-list li.react-datepicker__time-list-item{
  transition: all 0.5s ease;
}
  `;
