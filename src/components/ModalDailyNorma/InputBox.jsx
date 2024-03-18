import { StyledInputBox } from './ModalDailyNorma.styled';

export default function InputBox({
  paragrName,
  inputName,
  inputValue,
  handler,
}) {
  return (
    <StyledInputBox>
      {inputName === 'waterVolume' ? (
        <h3>{paragrName}</h3>
      ) : (
        <p className="no-margin">{paragrName}</p>
      )}
      <input
        type="text"
        name={inputName}
        value={inputValue}
        onChange={handler}
        placeholder="0"
      />
    </StyledInputBox>
  );
}
