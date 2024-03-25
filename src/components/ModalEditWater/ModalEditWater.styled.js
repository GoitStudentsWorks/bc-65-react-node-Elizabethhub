import styled from 'styled-components';

export const StyledModalEditStat = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 12px;

  width: 256px;
  border-radius: 10px;
  background-color: ${(props) => props.theme.modalSpanBgEdit};
  padding: 8px 24px 8px 24px;
  margin-bottom: 24px;
  span {
    font-size: 18px;
    color: ${(props) => props.theme.modalSpanEdit};
  }
  p {
    font-size: 12px;
    color: ${(props) => props.theme.modalTextEdit};
    margin: 0;
  }
  @media only screen and (min-width: 768px) {
    width: 254px;
  }
  @media only screen and (min-width: 1280px) {
    width: 254px;
  }
`;

export const StyledModalEditInput = styled.input`
  width: 256px;
  border-radius: 6px;
  border: 1px solid ${(props) => props.theme.inputBorderAdd};
  padding: 12px 10px 12px 10px;
  background-color: ${(props) => props.theme.formInputBackground};
  color: ${(props) => props.theme.inputTextAdd};
  &::placeholder {
    color: ${(props) => props.theme.inputTextAdd};
    font-size: 16px;
  }
  &:hover,
  &:focus {
    color: ${(props) => props.theme.inputTextAdd};
    border: 1px solid ${(props) => props.theme.inputBorderAdd};
    outline: transparent;
  }
  @media only screen and (min-width: 768px) {
    width: 544px;
  }
  @media only screen and (min-width: 1280px) {
    width: 544px;
  }
`;

export const ModalEditDateWrap = styled.div`
  label {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  input {
    width: 256px;
    border-radius: 6px;
    border: 1px solid ${(props) => props.theme.inputBorderAdd};
    padding: 12px 10px 12px 10px;
    background-color: ${(props) => props.theme.formInputBackground};
    color: ${(props) => props.theme.inputTextAdd};
    &::placeholder {
      color: ${(props) => props.theme.counterSpanText};
      font-size: 16px;
    }
    &:hover,
    &:focus {
      color: ${(props) => props.theme.counterSpanText};
      border: 1px solid ${(props) => props.theme.inputBorderAdd};
      outline: transparent;
    }
    @media only screen and (min-width: 768px) {
      width: 544px;
    }
    @media only screen and (min-width: 1280px) {
      width: 544px;
    }
  }
`;
