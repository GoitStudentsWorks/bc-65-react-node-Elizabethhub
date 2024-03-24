import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Select from 'react-select';
import UsFlagSVG from './Flag/UsFlagSVG';
import UalagSVG from './Flag/UalagSVG';
import ItFlagSVG from './Flag/ItFlagSVG';
import KzFlagSVG from './Flag/KzFlagSVG';
import GmFlagSVG from './Flag/GmFlagSVG';

const options = [
  { value: 'en', label: <UsFlagSVG /> },
  { value: 'uk', label: <UalagSVG /> },
  { value: 'it', label: <ItFlagSVG /> },
  { value: 'kz', label: <KzFlagSVG /> },
  { value: 'gm', label: <GmFlagSVG /> },
];

const customComponents = {
  padding: '0',
  dropdownIndicator: () => ({ display: 'none' }),
  indicatorSeparator: () => ({
    display: 'none',
  }),
  control: () => ({
    border: 'none',
    width: '45px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    // outline:"none",
    caretColor: 'transparent',
    borderRadius: 'none',
    cursor: 'pointer',
    boxShadow: 'none',
    backgroundColor: 'transparent',
    padding: '0',
  }),
  menu: (provided) => ({
    ...provided,
    borderRadius: ' 15px',
    border: 'none',
    width: '45px',
    boxShadow: ' rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;',
    backgroundColor: 'transparent',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    // position: 'static',
    // padding: '0',
  }),
  option: (provided, { isFocused }) => ({
    ...provided,
    // Видаліть фоновий колір
    // backgroundColor: isSelected ? 'transparent' : 'transparent',
    backgroundColor: isFocused ? '#9EBBFF' : 'transparent',
    borderRadius: ' 15px',
    display: 'flex',
    padding: '0',
    justifyContent: 'center',
    alignItems: 'center',
    width: '45px',
    cursor: 'pointer',
  }),
};

const DivSetting = () => {
  const { i18n } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState(i18n.language);

  useEffect(() => {
    const language = localStorage.getItem('language');
    if (language && language !== currentLanguage) {
      i18n.changeLanguage(language);
      setCurrentLanguage(language);
    }
  }, [i18n, currentLanguage]);

  const handleChangeLanguage = (selectedOption) => {
    const selectedLanguage = selectedOption.value;
    i18n.changeLanguage(selectedLanguage);
    setCurrentLanguage(selectedLanguage);
    localStorage.setItem('language', selectedLanguage);
  };

  return (
    <div>
      <Select
        options={options}
        value={options.find((option) => option.value === currentLanguage)}
        onChange={handleChangeLanguage}
        styles={customComponents}
      />
    </div>
  );
};

export default DivSetting;
