import {
  FormControlLabel,
  Radio,
  RadioGroup,
  ThemeProvider,
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import { radioInputs } from '../../helpers/ModalDayNorma/helper.js';
import { createTheme } from '@mui/material/styles';
import { lightTheme, darkTheme } from '../SwitchTheme/Theme.styled.jsx';
import { useState, useEffect } from 'react';
import RadioChecked from '../../images/SettingModal/RadioChecked.jsx';
import RadioUnChecked from '../../images/SettingModal/RadioUnChecked.jsx';

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
                    checkedIcon={<RadioChecked></RadioChecked>}
                    icon={<RadioUnChecked></RadioUnChecked>}
                    style={{
                      padding: 7,
                      marginLeft: 4,
                    }}
                  />
                }
                label={`${t(`For ${radioItem.value}`)}`}
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
