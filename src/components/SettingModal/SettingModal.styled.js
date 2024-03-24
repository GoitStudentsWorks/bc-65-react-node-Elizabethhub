import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 40px 20px;
  background: var(--modal-backdrop);
  z-index: 1200;
  overflow: auto;

  @media only screen and (min-width: 768px) {
    padding: 40px 32px;
  }
  @media only screen and (min-width: 1440px) {
    align-items: center;
  }
`;

export const Modal = styled.div`
  padding: 32px 12px;
  position: relative;
  border-radius: 10px;
  /* background: rgb(255, 255, 255); */
  width: 100%;
  min-width: 280px;
  background: ${(props) => props.theme.modalCantainerBackground};

  @media only screen and (min-width: 768px) {
    padding: 32px 24px;
    max-width: 704px;
  }
  @media only screen and (min-width: 1440px) {
    max-width: 1008px;
    min-height: 592px;
  }
`;

export const ModalTitle = styled.h1`
  font-size: 26px;
  font-weight: 500;
  line-height: 1.23;
  font-family: 'Roboto', sans-serif;

  margin-bottom: 24px;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 42px;
  right: 18px;
  border: none;
  background-color: transparent;
  padding: 0;

  @media only screen and (min-width: 768px) {
    right: 30px;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 24px;

  #name {
    border: 1px solid
      var(
        ${(props) =>
          props.$errors.name ? '--primary-red' : '--primary-mediumblue'}
      );
    color: var(${(props) => (props.$errors.name ? '--primary-red' : '--blue')});
    margin-bottom: ${(props) => (props.$errors?.name ? '4px' : '0')};
  }
  #email {
    border: 1px solid
      var(
        ${(props) =>
          props.$errors.email ? '--primary-red' : '--primary-mediumblue'}
      );
    color: var(
      ${(props) => (props.$errors.email ? '--primary-red' : '--blue')}
    );
    margin-bottom: ${(props) => (props.$errors?.email ? '4px' : '0')};
  }
  #oldPassword {
    border: 1px solid
      var(
        ${(props) =>
          props.$errors.oldPassword ? '--primary-red' : '--primary-mediumblue'}
      );
    color: var(
      ${(props) => (props.$errors.oldPassword ? '--primary-red' : '--blue')}
    );
    margin-bottom: ${(props) => (props.$errors?.oldPassword ? '4px' : '0')};
  }
  #newPassword {
    border: 1px solid
      var(
        ${(props) =>
          props.$errors.newPassword ? '--primary-red' : '--primary-mediumblue'}
      );
    color: var(
      ${(props) => (props.$errors.newPassword ? '--primary-red' : '--blue')}
    );
    margin-bottom: ${(props) => (props.$errors?.newPassword ? '4px' : '0')};
  }
  #confirmPassword {
    border: 1px solid
      var(
        ${(props) =>
          props.$errors.confirmPassword
            ? '--primary-red'
            : '--primary-mediumblue'}
      );
    color: var(
      ${(props) => (props.$errors.confirmPassword ? '--primary-red' : '--blue')}
    );
    margin-bottom: ${(props) => (props.$errors?.confirmPassword ? '4px' : '0')};
  }
`;

export const BlockWrap8 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
export const BlockWrap12 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;
export const InternalBlockWrap24 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;
export const ExternalBlockWrap24 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media only screen and (min-width: 1440px) {
    flex-direction: row;
  }
`;
export const BlockWrap2452 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media only screen and (min-width: 1440px) {
    gap: 52px;
  }
`;

export const FildsTitle = styled.h2`
  font-size: 18px;
  font-weight: 500;
  line-height: 1.11;
  font-family: 'Roboto', sans-serif;
`;
export const RadioGroup = styled.div`
  display: flex;
`;

export const BigLabel = styled.label`
  font-size: 18px;
  font-weight: 500;
  line-height: 1.11;
  font-family: 'Roboto', sans-serif;
`;
export const GenderLabel = styled.label`
  position: relative;
  margin-right: 24px;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.25;
  font-family: 'Roboto', sans-serif;
`;

export const SmallLabel = styled.label`
  font-size: 16px;
  font-weight: 400;
  line-height: 1.25;
  font-family: 'Roboto', sans-serif;
`;
export const Radio = styled.input`
  margin-right: 8px;
`;
export const RadioWrap = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
`;

export const InputFild = styled.input`
  border: 1px solid var(--primary-mediumblue);
  border-radius: 6px;
  padding: 12px 10px;
  width: 100%;
  max-width: 392px;
  height: 44px;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.25;
  font-family: 'Roboto', sans-serif;
  color: var(--blue);
  caret-color: var(--black);
  background-color: ${(props) => props.theme.formInputBackground};
  color: ${(props) => props.theme.formInputColor};
  outline: none;
  &::placeholder {
    font-size: 16px;
    font-weight: 400;
    line-height: 1.25;
    font-family: 'Roboto', sans-serif;
    color: var(--modal-light-blue);
  }

  @media only screen and (min-width: 1440px) {
    min-width: 392px;
  }
`;

export const PasswordWrap = styled.div`
  position: relative;
  max-width: 392px;
`;

export const InputPassword = styled.input`
  position: relative;
  border: 1px solid #d7e3ff;
  border-radius: 6px;
  padding: 12px 10px;
  width: 100%;
  /* max-width: 392px; */
  height: 44px;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.25;
  font-family: 'Roboto', sans-serif;
  color: var(--blue);
  caret-color: var(--black);
  outline: none;
  &::placeholder {
    font-size: 16px;
    font-weight: 400;
    line-height: 1.25;
    font-family: 'Roboto', sans-serif;
    color: var(--modal-light-blue);
  }

  @media only screen and (min-width: 1440px) {
    min-width: 392px;
  }
`;

export const PassShowBtn = styled.button`
  background-color: transparent;
  border: none;
  position: absolute;
  right: 11px;
  top: 14px;
  height: 16px;
  width: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
`;

export const SaveButton = styled.button`
  /* margin-top: 12px; */
  border-radius: 10px;
  border: none;
  padding: 8px 30px;
  /* width: 256px; */
  width: 100%;
  max-width: 392px;
  height: 36px;
  box-shadow: ${(props) => props.theme.boxShodov};

  font-size: 16px;
  font-weight: 500;
  line-height: 1.25;
  font-family: 'Roboto', sans-serif;
  text-align: center;
  background: ${(props) => props.theme.buttonBackground};
  color: ${(props) => props.theme.buttonColor};

  @media only screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 1.33;
    padding: 10px 30px;
    width: 160px;
    height: 44px;
    align-self: flex-end;
  }
`;

export const ErrorSpan = styled.span`
  color: var(--primary-red);
  font-size: 14px;
  font-weight: 400;
  line-height: 1.29;
  font-family: 'Roboto', sans-serif;
`;
