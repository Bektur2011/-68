import React from 'react';
import './QuickMenu.css';

const QuickMenu = ({ onMenuClick, onHomeworkClick }) => {
  return (
    <div className="quick-menu">
      <button className="quick-menu-button" onClick={onMenuClick}>
        📋 {/* Clipboard icon for menu */}
      </button>
      <button className="quick-menu-button" onClick={onHomeworkClick}>
        📖 {/* Book icon for homework */}
      </button>
    </div>
  );
};

export default QuickMenu;
