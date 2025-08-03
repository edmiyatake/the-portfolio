import React, { useState, useEffect } from 'react';
import './ToggleButton.css';

const ToggleButton = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(prev => !prev);
  };

  useEffect(() => {
    document.body.className = isDarkMode ? 'dark-mode' : 'light-mode';
  }, [isDarkMode]);

  return (
    <div className="toggle-container">
      <input
        type="checkbox"
        id="theme-toggle"
        checked={isDarkMode}
        onChange={toggleTheme}
      />
      <label htmlFor="theme-toggle">Toggle Theme</label>
    </div>
  );
};

export default ToggleButton;
