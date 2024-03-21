import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

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

  const handleChangeLanguage = (language) => {
    i18n.changeLanguage(language);
    setCurrentLanguage(language);
    localStorage.setItem('language', language);
  };

  return (
    <div>
      <div>
        <button onClick={() => handleChangeLanguage('uk')}>Українська</button>
        <button onClick={() => handleChangeLanguage('en')}>English</button>
      </div>
    </div>
  );
};

export default DivSetting;
