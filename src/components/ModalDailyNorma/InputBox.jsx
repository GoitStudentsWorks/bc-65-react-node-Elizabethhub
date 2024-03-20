import { StyledInputBox } from './ModalDailyNorma.styled';

export default function InputBox({
  paragrName,
  inputName,
  inputValue,
  handler,
  min = '0',
  max,
}) {
  return (
    <StyledInputBox>
      <p className="no-margin">{paragrName}</p>
      <input
        type="number"
        min={min !== false ? min : undefined}
        max={max}
        name={inputName}
        value={inputValue}
        onChange={handler}
        placeholder="0"
      />
    </StyledInputBox>
  );
}
