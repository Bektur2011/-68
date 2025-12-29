import React, { useState, useEffect } from 'react';

const Settings = () => {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
    document.body.className = savedTheme;
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.body.className = newTheme;
  };

  return (
    <div className="settings">
      <h2>Настройки</h2>
      <div className="setting-item">
        <label htmlFor="theme-toggle">Тема оформления:</label>
        <button id="theme-toggle" onClick={toggleTheme}>
          {theme === 'light' ? 'Переключить на тёмную' : 'Переключить на светлую'}
        </button>
      </div>
    </div>
  );
};

export default Settings;
