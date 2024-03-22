import {
  genderDescription,
  textData,
} from '../../helpers/ModalDayNorma/helper.js';
import { useTranslation } from 'react-i18next';

export default function FormulaField() {
  const { t, i18n } = useTranslation();
  const { hint, rate } = textData;

  const getSpanStyle = () => {
    return {
      fontSize:
        i18n.language === 'uk' && window.innerWidth <= 767 ? '16px' : '18px',
    };
  };

  return (
    <div>
      <div>
        <ul>
          {genderDescription.map((genderData) => {
            const { gender, massRate, timeRate } = genderData;

            return (
              <li className="formula" key={`${gender}+${massRate}`}>
                <p>
                  {t(`For ${gender}`)}:
                  <span
                    style={getSpanStyle()}
                  >{` V=(M*${massRate}) + (T*${timeRate})`}</span>
                </p>
              </li>
            );
          })}
        </ul>
      </div>
      <p className="hint">
        <span className="star">*</span> {t(`${hint}`)}
      </p>
      <h3>{t(`${rate}`)}</h3>
    </div>
  );
}
