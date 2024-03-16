import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(18, 20, 23, 0.5);
  z-index: 1200;
`;

export const Modal = styled.div`
  padding: 32px 12px;
  position: absolute;
  border-radius: 10px;
  background: rgb(255, 255, 255);
  max-width: 100%;
  min-width: 280px;
  /* min-height: 752px; */
  /* top: 50%; */
  top: 35px;
  left: 50%;
  /* transform: translate(-50%, -50%); */
  transform: translate(-50%, 0);
`;

export const ModalTitle = styled.h1`
  font-size: 26px;
  font-weight: 500;
  line-height: 1.23;
  font-family: 'Roboto', sans-serif;
  color: #2f2f2f;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 42px;
  right: 18px;
  border: none;
  background-color: transparent;
`;

export const Form = styled.form`
  /* margin-top: 24px; */
  display: flex;
  flex-direction: column;
`;

export const FildsTitle = styled.h2`
  margin-top: 24px;
  margin-bottom: 12px;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.11;
  font-family: 'Roboto', sans-serif;
  color: #2f2f2f;
`;
export const BigLabel = styled.label`
  /* display: flex;
  flex-direction: column; */
  margin-top: 24px;
  margin-bottom: 8px;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.11;
  font-family: 'Roboto', sans-serif;
  color: #2f2f2f;
`;
export const SmallLabel = styled.label`
  /* display: flex;
  flex-direction: column; */
  position: relative;
  /* margin-top: 12px; */
  margin-bottom: 8px;
  margin-right: 24px;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.25;
  font-family: 'Roboto', sans-serif;
  color: #2f2f2f;
`;
export const Radio = styled.input`
  /* display: flex;
  flex-direction: column; */
  margin-right: 8px;
  border-color: blue;
  /* font-size: 16px;
  font-weight: 400;
  line-height: 1.25;
  font-family: 'Roboto', sans-serif;
  color: #2f2f2f; */
`;
export const RadioWoman = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  /* margin-right: 8px;
  border-color: blue; */
  /* font-size: 16px;
  font-weight: 400;
  line-height: 1.25;
  font-family: 'Roboto', sans-serif;
  color: #2f2f2f; */
`;
export const RadioMan = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  /* margin-right: 8px;
  border-color: blue; */
  /* font-size: 16px;
  font-weight: 400;
  line-height: 1.25;
  font-family: 'Roboto', sans-serif;
  color: #2f2f2f; */
`;
export const InputFild = styled.input`
  /* margin-bottom: 12px; */
  border: 1px solid #d7e3ff;
  border-radius: 6px;
  padding: 12px 10px;
  width: 256px;
  height: 44px;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.25;
  font-family: 'Roboto', sans-serif;
  color: #407bff;
`;
export const InputPassword = styled.input`
  margin-bottom: 12px;
  border: 1px solid #d7e3ff;
  border-radius: 6px;
  padding: 12px 10px;
  width: 256px;
  height: 44px;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.25;
  font-family: 'Roboto', sans-serif;
  color: #407bff;
`;
export const SaveButton = styled.button`
  margin-top: 12px;
  border-radius: 10px;
  border: none;
  padding: 8px 30px;
  width: 256px;
  height: 36px;
  box-shadow: 0 4px 8px 0 rgba(64, 123, 255, 0.34);
  background: #407bff;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.25;
  font-family: 'Roboto', sans-serif;
  text-align: center;
  color: #fff;
`;
