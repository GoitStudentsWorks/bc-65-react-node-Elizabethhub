import React, { useState } from 'react';
import './Switch.css';
import MoonIcon from './MoonIcon';
import SunIcon from './SunIcon';

function Switch({ toggleTheme, isDarkTheme }) {
  const [isToggled, setIsToggled] = useState(isDarkTheme);

  const onToggle = () => {
    setIsToggled(!isToggled);
    toggleTheme();
  };

  return (
    <>
      <MoonIcon />
      <label className="toggle-switch">
        <input type="checkbox" checked={isToggled} onChange={onToggle} />
        <span className="switch" />
      </label>
      <SunIcon />
    </>
  );
}

export default Switch;
