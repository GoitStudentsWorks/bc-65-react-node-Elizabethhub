import SvgPlus from '../../images/svg/svgModal/SvgPlus.jsx';
import SvgMinus from '../../images/svg/svgModal/SvgMinus.jsx';
import SvgGlass from '../../images/svg/svgToday/GlassSvg.jsx';
import {
  StyledModalAddSave,
  StyledModalAddTime,
  StyledModalAddTracker,
  StyledModalAddValue,
  StyledModalForm,
  TimeGlobalStyles,
} from '../ModalAddWater/ModalAddWater.styled.js';
import {
  ModalEditDateWrap,
  StyledModalEditInput,
  StyledModalEditStat,
} from './ModalEditWater.styled.js';
import { useEffect, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import useCounter from '../../hooks/modalHandleUpdate.js';
import { format } from 'date-fns';
import { useDispatch } from 'react-redux';
import {
  editWaterThunk,
  fetchTodayWaterThunk,
} from '../../store/water/operations.js';
import { changeModalClose, editWater } from '../../store/water/waterSlice.js';
import { toast } from 'react-toastify';
import { useTranslation } from 'react-i18next';

const ModalEditWater = ({ waterItem }) => {
  const { t } = useTranslation();
  const [time, setTime] = useState(new Date(waterItem?.time));
  const { counter, handleUpdate } = useCounter(waterItem?.milliliters);
  const [manualValue, setManualValue] = useState('');
  const [inputFocused, setInputFocused] = useState(false);
  const [valueSource, setValueSource] = useState('default');
  const [formattedTime, setFormattedTime] = useState(format(time, 'hh:mm a'));

  const dispatch = useDispatch();

  const onSubmit = async (e) => {
    e.preventDefault();

    const updatedWater = {
      ...waterItem,
      milliliters: parseInt(manualValue),
      time,
    };
    const date = new Date().toISOString().split('T')[0];
    dispatch(editWaterThunk({ id: waterItem?._id, ...updatedWater }))
      .unwrap()
      .then(() => {
        dispatch(editWater({ id: waterItem?._id, ...updatedWater }));
        dispatch(fetchTodayWaterThunk({ date }));
        dispatch(changeModalClose(false));
        toast.success('Water note was successfully edited');
      })
      .catch((error) => {
        toast.error(error);
      });
  };

  const handleManualValueChange = (e) => {
    let value = e.target.value;
    setValueSource('manual');
    if (
      value !== '' &&
      (isNaN(value) || parseInt(value) > 5000 || parseInt(value) < 1)
    ) {
      value = '5000';
    }
    setManualValue(value);
  };

  const handleInputBlur = () => {
    setInputFocused(false);
  };

  const handleInputFocus = () => {
    setInputFocused(true);
  };

  useEffect(() => {
    setManualValue(`${counter}`);
  }, [counter]);

  const displayValue = inputFocused
    ? `${counter}ml`
    : manualValue !== ''
    ? `${manualValue}ml`
    : `${counter}ml`;

  return (
    <StyledModalForm onSubmit={onSubmit}>
      <StyledModalEditStat>
        <SvgGlass />
        <span>{displayValue ? displayValue : `${counter}ml`}</span>
        <p>{formattedTime}</p>
      </StyledModalEditStat>
      <h3>{t('correctEnteredData')}</h3>
      <p>{t('amountOfWater')}</p>

      <StyledModalAddTracker>
        <button
          type="button"
          name="decrement"
          onClick={handleUpdate}
          disabled={counter === 0}
        >
          <SvgMinus size="24" />
        </button>
        <span>{displayValue ? displayValue : `${counter}ml`}</span>
        <button type="button" name="increment" onClick={handleUpdate}>
          <SvgPlus size="24" />
        </button>
      </StyledModalAddTracker>

      <StyledModalAddTime>
        <p>{t('recordingTime')}</p>
        <ModalEditDateWrap>
          <DatePicker
            selected={time}
            onChange={(date) => {
              setTime(date);
            }}
            onBlur={() => {
              const formattedTime = format(time, 'hh:mm a');
              setFormattedTime(formattedTime);
            }}
            showTimeSelect
            showTimeSelectOnly
            timeIntervals={5}
            dateFormat="HH:mm"
            timeFormat="HH:mm"
            minTime={new Date(2024, 1, 1, 0, 0)}
            maxTime={new Date()}
            timeZone="UTC"
          />
          <TimeGlobalStyles />
        </ModalEditDateWrap>
      </StyledModalAddTime>

      <StyledModalAddValue>
        <h3>{t('enterTheValueOfTheWaterUsed')}</h3>
        <StyledModalEditInput
          type="number"
          // type="text"
          // pattern="[0-9]*"
          placeholder={`${counter}`}
          min="1"
          max="5000"
          name="value"
          value={manualValue}
          onChange={handleManualValueChange}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          required
        />
      </StyledModalAddValue>

      <StyledModalAddSave>
        <span>{displayValue}</span>
        <button type="submit">{t('save')}</button>
      </StyledModalAddSave>
    </StyledModalForm>
  );
};

export default ModalEditWater;
