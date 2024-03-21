import { FormControlLabel, Radio, RadioGroup } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { radioInputs } from '../../helpers/ModalDayNorma/helper.js';
import SvgRadioChecked from '../../images/svg/svgModal/SvgRadioChecked.jsx';
import SvgRadio from '../../images/svg/svgModal/SvgRadio.jsx';

export default function RadioGroupComponent({
  genderValue,
  handleGenderChange,
}) {
  const { t } = useTranslation();
  return (
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
            color: 'var(--black)',
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
  );
}
