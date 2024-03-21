import {
  genderDescription,
  textData,
} from '../../helpers/ModalDayNorma/helper.js';

export default function FormulaField() {
  const { hint, rate } = textData;
  return (
    <div>
      <div>
        <ul>
          {genderDescription.map((genderData) => {
            const { gender, massRate, timeRate } = genderData;

            return (
              <li className="formula" key={`${gender}+${massRate}`}>
                <p>
                  For {gender}:
                  <span>{` V=(M*${massRate}) + (T*${timeRate})`}</span>
                </p>
              </li>
            );
          })}
        </ul>
      </div>
      <p className="hint">
        <span className="star">*</span> {hint}
      </p>
      <h3>{rate}</h3>
    </div>
  );
}
