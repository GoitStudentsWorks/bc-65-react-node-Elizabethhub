import { useTranslation } from 'react-i18next';
import { StyledInputBox } from './ModalDailyNorma.styled';

export default function InputBox({
  paragrName,
  inputName,
  inputValue,
  handler,
  min = '0',
  max,
}) {
  const { t } = useTranslation();
  return (
    <StyledInputBox>
      <p className="no-margin">{t(`${paragrName}`)}</p>
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
