import {
  FormControlLabel,
  Radio,
  RadioGroup,
  ThemeProvider,
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import { radioInputs } from '../../helpers/ModalDayNorma/helper.js';
import SvgRadioChecked from '../../images/svg/svgModal/SvgRadioChecked.jsx';
import SvgRadio from '../../images/svg/svgModal/SvgRadio.jsx';
import { createTheme } from '@mui/material/styles';
import {
  lightTheme,
  darkTheme,
} from '../../components/Header/ThemeStyled/Theme.styled.jsx';
import { useState, useEffect } from 'react';

function RadioGroupComponent({ genderValue, handleGenderChange }) {
  const { t } = useTranslation();
  const [storedTheme, setStoredTheme] = useState(localStorage.getItem('theme'));

  useEffect(() => {
    setStoredTheme(localStorage.getItem('theme'));
  }, []);

  const theme = createTheme({
    palette: {
      mode: storedTheme === 'dark' ? 'dark' : 'light',
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <div>
        <RadioGroup
          row
          aria-labelledby="radio-buttons"
          defaultValue={'woman'}
          name="radio-buttons-group"
          value={genderValue}
          onChange={handleGenderChange}
          sx={{
            '& .MuiTypography-root': {
              fontSize: 16,
              color:
                storedTheme === 'dark'
                  ? darkTheme.colorBody
                  : lightTheme.colorBody,
            },
          }}
          className="radioGroup"
        >
          {radioInputs.map((radioItem, idx) => {
            return (
              <FormControlLabel
                value={radioItem.value}
                control={
                  <Radio
                    checkedIcon={<SvgRadioChecked></SvgRadioChecked>}
                    icon={<SvgRadio></SvgRadio>}
                    style={{
                      padding: 7,
                      marginLeft: 4,
                    }}
                  />
                }
                label={`${t('For')} ${t(`${radioItem.value}`)}`}
                checked={genderValue === radioItem.value}
                key={`${idx}+${radioItem.value}`}
              />
            );
          })}
        </RadioGroup>
      </div>
    </ThemeProvider>
  );
}
export default RadioGroupComponent;
