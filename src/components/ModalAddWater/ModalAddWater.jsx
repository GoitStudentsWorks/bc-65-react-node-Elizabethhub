import SvgPlus from '../../images/svg/svgModal/SvgPlus.jsx';
import SvgMinus from '../../images/svg/svgModal/SvgMinus.jsx';
import {
  ModalAddDateWrap,
  StyledModalAddInput,
  StyledModalAddSave,
  StyledModalAddTime,
  StyledModalAddTracker,
  StyledModalAddValue,
  StyledModalForm,
  TimeGlobalStyles,
} from './ModalAddWater.styled.js';
import { useEffect, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import useCounter from '../../hooks/modalHandleUpdate.js';
import { useDispatch } from 'react-redux';
import {
  addWaterThunk,
  fetchTodayWaterThunk,
} from '../../store/water/operations.js';
import { changeModalClose } from '../../store/water/waterSlice.js';
import { toast } from 'react-toastify';
import { useTranslation } from 'react-i18next';

const ModalAddWater = () => {
  const { t } = useTranslation();
  const { counter, handleUpdate } = useCounter(0);
  const [time, setTime] = useState(new Date());
  const [manualValue, setManualValue] = useState('');
  const [inputFocused, setInputFocused] = useState(false);

  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();

    const water = {
      milliliters: e.target.elements.value.value,
      time: time,
    };
    const date = new Date().toISOString().split('T')[0];
    dispatch(addWaterThunk(water))
      .unwrap()
      .then(() => {
        dispatch(changeModalClose(false));
        dispatch(fetchTodayWaterThunk({ date }));
        toast.success('Water note was successfully added');
      })
      .catch((error) => {
        toast.error(error);
      });
  };

  const handleManualValueChange = (e) => {
    let value = e.target.value;
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
      <h3>{t('chooseAvalue')}</h3>
      <p>{t('amountOfWater')}</p>

      <StyledModalAddTracker>
        <button
          type="button"
          name="decrement"
          onClick={handleUpdate}
          disabled={counter === 0}
          aria-label={t('decrementWater')}
        >
          <SvgMinus size="24" />
        </button>
        <span>{displayValue ? displayValue : `${counter}ml`}</span>
        <button
          type="button"
          name="increment"
          onClick={handleUpdate}
          aria-label={t('incrementWater')}
        >
          <SvgPlus size="24" />
        </button>
      </StyledModalAddTracker>

      <StyledModalAddTime>
        <p>{t('recordingTime')}</p>
        <ModalAddDateWrap>
          <DatePicker
            selected={time}
            onChange={(date) => {
              setTime(date);
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
        </ModalAddDateWrap>
      </StyledModalAddTime>
      <StyledModalAddValue>
        <h3>{t('enterTheValueOfTheWaterUsed')}</h3>
        <StyledModalAddInput
          type="number"
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
        <button type="submit" aria-label="save">
          {t('save')}
        </button>
      </StyledModalAddSave>
    </StyledModalForm>
  );
};

export default ModalAddWater;
