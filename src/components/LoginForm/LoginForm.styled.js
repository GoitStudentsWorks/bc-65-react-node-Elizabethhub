import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const FormWrapper = styled.div`
  margin-top: 24px;
  margin-bottom: 66px;
  @media only screen and (min-width: 768px) {
    max-width: 336px;
  }

  @media only screen and (min-width: 1280px) {
    margin-top: 162px;
    min-width: 384px;
  }
`;
export const StyledLoginForm = styled.form`
  display: flex;
  flex-direction: column;

  label:first-child > input {
    border: 1px solid
      var(
        ${(props) =>
          props.$errorEmail ? '--primary-red' : '--primary-mediumblue'}
      );

    color: var(${(props) => (props.$errorEmail ? '--primary-red' : '--blue')});
  }
  label:nth-child(2) > input {
    border: 1px solid
      var(
        ${(props) =>
          props.$errorPassword ? '--primary-red' : '--primary-mediumblue'}
      );

    color: var(
      ${(props) => (props.$errorPassword ? '--primary-red' : '--blue')}
    );
  }
  label:nth-child(3) > input {
    border: 1px solid
      var(
        ${(props) =>
          props.$errorPassword ? '--primary-red' : '--primary-mediumblue'}
      );

    color: var(
      ${(props) => (props.$errorPassword ? '--primary-red' : '--blue')}
    );
  }
`;
export const Heading2 = styled.h2`
  font-weight: 500;
  font-size: 26px;
  line-height: 32px;
  margin-bottom: 16px;
`;
export const LoginInput = styled.input`
  margin-top: 8px;
  padding: 12px 10px;
  border-radius: 6px;
  border: 1px solid var(--primary-mediumblue);
  outline: none;
  background-color: ${(props) => props.theme.formInputBackground};
  color: ${(props) => props.theme.formInputColor};

  &::placeholder {
    color: var(--primary-blue);
    font-size: 16px;
    line-height: 20px;
  }
`;

export const Loginlabel = styled.label`
  display: flex;
  flex-direction: column;
  font-size: 18px;
  line-height: 24px;
  margin-bottom: 16px;
  position: relative;
`;
export const LoginBtn = styled.button`
  margin-bottom: 16px;

  border: 1px solid var(--blue);

  padding: 8px 30px;
  border-radius: 10px;

  box-shadow: ${(props) => props.theme.boxShodov};
  transition: all 0.4s;
  background: ${(props) => props.theme.buttonBackground};
  color: ${(props) => props.theme.buttonColor};
  &:hover,
  &:focus {
    box-shadow: 0 4px 14px 0 rgba(64, 123, 255, 0.54);
  }

  @media only screen and (min-width: 768px) {
    font-size: 18px;
  }
`;
export const LoginLink = styled(Link)`
  color: var(--blue);
  transition: all 0.4s;
  &:hover,
  &:focus {
    color: var(--primary-orange);
  }

  margin-right: 10px;
`;
export const PassShowBtn = styled.button`
  background-color: transparent;
  border: none;
  position: absolute;
  right: 10px;
  top: 47px;
  height: 16px;
  width: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
`;
