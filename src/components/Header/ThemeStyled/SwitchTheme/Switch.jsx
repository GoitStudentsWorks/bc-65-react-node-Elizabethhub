import { useState } from 'react';
import './Switch.css';
import MoonIcon from './MoonIcon';
import SunIcon from './SunIcon';
import styled from 'styled-components';

const ToggleButton = styled.button`
  appearance: none;
  border: none;
  background: none;
  padding: 0;
  cursor: pointer;
`;

function Switch({ toggleTheme, isDarkTheme }) {
  const [isToggled, setIsToggled] = useState(isDarkTheme);

  const onToggle = () => {
    setIsToggled(!isToggled);
    toggleTheme();
  };

  return (
    <>
      <ToggleButton className="toggle-button" onClick={onToggle}>
        {isToggled ? <MoonIcon /> : <SunIcon />}
      </ToggleButton>
    </>
  );
}

export default Switch;
