import styled from 'styled-components';

export const ForgotWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* align-items: center; */
  margin-top: 100px;

  @media only screen and (min-width: 1280px) {
    max-width: 768px;
  }
`;
export const ForgotForm = styled.form`
  display: flex;
  flex-direction: column;
`;
export const ForgotHeading = styled.h2`
  font-weight: 500;
  font-size: 26px;
  line-height: 32px;
  margin-bottom: 25px;
`;
export const ForgotLabel = styled.label`
  display: flex;
  flex-direction: column;
  font-size: 18px;
  line-height: 24px;
  margin-bottom: 16px;
  position: relative;
`;
export const ForgotInput = styled.input`
  margin-top: 8px;
  padding: 12px 10px;
  border-radius: 6px;
  background-color: ${(props) => props.theme.formInputBackground};
  border: 1px solid var(${(props) => props.theme.inputOnlyColor});
  outline: none;
  color: var(--blue);
  margin-bottom: 20px;

  @media only screen and (min-width: 1280px) {
    max-width: 500px;
  }

  &::placeholder {
    color: var(${(props) => props.theme.inputColorText});
    font-size: 16px;
    line-height: 20px;
  }
`;
export const ForgotBtn = styled.button`
  margin-bottom: 16px;
  background-color: var(--blue);
  border: 1px solid var(--blue);
  color: ${(props) => props.theme.buttonColor};
  padding: 8px 30px;
  border-radius: 10px;
  max-width: 150px;
  /* margin-left: auto; */

  box-shadow: 0 4px 8px 0 rgba(64, 123, 255, 0.34);
  transition: all 0.4s;

  &:hover,
  &:focus {
    box-shadow: 0 4px 14px 0 rgba(64, 123, 255, 0.54);
  }
  white-space: nowrap;

  @media only screen and (min-width: 768px) {
    /* font-size: 18px; */
  }
`;
