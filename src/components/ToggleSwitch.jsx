import React from 'react';
import { useTheme } from '../ThemeContext';
import { ToggleSwitchRegular, ToggleSwitchDarkMode } from './Icons';


const ToggleSwitch = () => {

  const { darkMode, toggleTheme } = useTheme();

  return (
    <div onClick={toggleTheme} className="cursor-pointer p-2">
      {darkMode ?  <ToggleSwitchDarkMode /> : <ToggleSwitchRegular />}
    </div>
  );
};

export default ToggleSwitch;
